package com.group6.userservice.controller;

import java.util.concurrent.ExecutionException;

import com.group6.userservice.service.AuthService;
import com.group6.userservice.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private AuthService firebaseSerivce;

    @GetMapping("/")
    public ResponseEntity<String> hello() {
        return new ResponseEntity<String>("hello", HttpStatus.OK);
    }

    @GetMapping("/getuserdetails")
    public User getUserDetails(@RequestHeader() String username) throws InterruptedException, ExecutionException{
        return firebaseSerivce.getUserDetail(username);        
    }

    @PostMapping("/register")
    public String registerEndpoint(@RequestBody User user) throws InterruptedException, ExecutionException{
        return firebaseSerivce.register(user);
    }

    @PostMapping("/login")
    public String loginEndpoint(@RequestBody String username, String pass) throws InterruptedException, ExecutionException{
        return firebaseSerivce.login(username, pass);
    }


}