package com.group6.userservice.user;

import java.util.UUID;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {
    private String id;
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private String role;
	private String email;
	private String logintoken;

    public User(String firstname, String lastname, String username, String password, String role, String email, String logintoken){
        this.id = UUID.randomUUID().toString();
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.role = role;
		this.email = email;
		this.logintoken = logintoken;
    }

}