package com.pass.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pass.datajpa.model.Password;

public interface PasswordRepository extends JpaRepository<Password, Long> {
  List<Password> findByPublished(boolean published);
  List<Password> findByCompanyContaining(String company);
}