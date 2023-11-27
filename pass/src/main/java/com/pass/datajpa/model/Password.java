package com.pass.datajpa.model;

import jakarta.persistence.*;

@Entity
@Table(name = "passwords")
public class Password {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "company")
    private String company;

    @Column(name = "user")
    private String user;

    @Column(name = "password")
    private String password;

	@Column(name = "published")
	private boolean published;

    public Password() {
        // Constructor logic goes here
    }
    public Password(String company, String user,String password, boolean published) {
		this.company = company;
		this.user = user;
        this.password = password;
		this.published = published;
	}

	public long getId() {
		return id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

	@Override
	public String toString() {
		return "Password [id=" + id + ", company=" + company + ", user=" + user + ", password=" + password + ", published=" + published + "]";
	}

}