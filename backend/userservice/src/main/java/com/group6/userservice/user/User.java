package com.group6.userservice.user;

public class User {


    public String firstname;
    public String lastname;
    public String username;
    public String password;
    public String role;
    public String email;

    public User() {
    }

    public User(String firstname, String lastname, String name, String pass, String role, String email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = name;
        this.password = pass;
        this.role = role;
        this.email = email;
    }

    public String getName() {
        return this.username;
    }

}