package com.pass.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pass.datajpa.model.Password;
import com.pass.datajpa.repository.PasswordRepository;

@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/api/")
public class PasswordController {

  @Autowired
  PasswordRepository passwordRepository;

  @GetMapping("/passwords")
  public ResponseEntity<List<Password>> getAllPasswords(@RequestParam(required = false) String company) {
    try {
      List<Password> passwords = new ArrayList<Password>();

      if (company == null)
        passwordRepository.findAll().forEach(passwords::add);
      else
        passwordRepository.findByCompanyContaining(company).forEach(passwords::add);

      if (passwords.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(passwords, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/passwords/{id}")
  public ResponseEntity<Password> getPasswordById(@PathVariable("id") long id) {
    Optional<Password> passwordData = passwordRepository.findById(id);

    if (passwordData.isPresent()) {
      return new ResponseEntity<>(passwordData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/passwords")
  public ResponseEntity<Password> createPassword(@RequestBody Password password) {
    try {
      Password _password = passwordRepository
          .save(new Password(password.getCompany(), password.getUser(), password.getPassword(), false));
      return new ResponseEntity<>(_password, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/passwords/{id}")
  public ResponseEntity<Password> updatePassword(@PathVariable("id") long id, @RequestBody Password password) {
    Optional<Password> passwordData = passwordRepository.findById(id);

    if (passwordData.isPresent()) {
      Password _password = passwordData.get();
      _password.setCompany(password.getCompany());
      _password.setUser(password.getUser());
      _password.setPassword(password.getPassword());
      _password.setPublished(password.isPublished());
      return new ResponseEntity<>(passwordRepository.save(_password), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/passwords/{id}")
  public ResponseEntity<HttpStatus> deletePassword(@PathVariable("id") long id) {
    try {
      passwordRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/passwords")
  public ResponseEntity<HttpStatus> deleteAllPasswords() {
    try {
      passwordRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @GetMapping("/passwords/published")
  public ResponseEntity<List<Password>> findByPublished() {
    try {
      List<Password> passwords = passwordRepository.findByPublished(true);

      if (passwords.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(passwords, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}