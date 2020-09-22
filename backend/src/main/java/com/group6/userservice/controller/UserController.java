package com.group6.userservice.controller;

import java.util.UUID;
import java.util.concurrent.ExecutionException;

import com.group6.userservice.service.AuthService;
import com.group6.userservice.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private AuthService firebaseService;

    @GetMapping("/")
    public String hello() {
        return "hello";
    }

    @GetMapping("/user/get/details")
    public User getUserDetails(@RequestHeader() String username) throws InterruptedException, ExecutionException{
        return firebaseService.getUserDetail(username);        
    }

    @GetMapping("/updateuserdetails")
    public User updateUserDetails(@RequestBody() User user) throws InterruptedException, ExecutionException{
        return firebaseService.updateUserDetails(user);        
    }

    @PostMapping("/register")
    public User registerEndpoint(@RequestBody User user) throws InterruptedException, ExecutionException{
        return firebaseService.register(user);
    }

    @PostMapping("/login")
    @ResponseBody
    public String loginEndpoint(@RequestBody String username, String pass) throws InterruptedException, ExecutionException{
        firebaseService.login(username, pass);
        return UUID.randomUUID().toString();
    }


}