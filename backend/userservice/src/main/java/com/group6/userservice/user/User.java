package com.group6.userservice.user;

import lombok.Data;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

@Data
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(name = "firstname")
    public String firstname;

    @Column(name = "lastname")
    public String lastname;

    @Column(name = "username")
    public String username;

    @Column(name = "password")
    public String password;

    @Column(name = "role")
    public String role;

    @Column(name = "email")
    public String email;

    public User(){}

    public User(String firstname, String lastname, String name, String pass, String role, String email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = name;
        this.password = pass;
        this.role = role; 
        this.email = email;
    }
    
}