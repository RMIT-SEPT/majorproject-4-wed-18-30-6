package com.group6.userservice.user;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class User{
    @Id
    public String id;

    public String firstname;
    public String lastname;
    public String username;
    public String password;
    public String address;
    public String phone;
    public int balance;
    public String email;

    public User(){}

    public User(String firstname, String lastname, String name, String pass, String address, String phone, String email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = name;
        this.password = pass;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.balance = 0;
    }
    
}