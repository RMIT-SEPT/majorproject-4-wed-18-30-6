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

    // @PostMapping("/register")
    // public ResponseEntity<String> register(@RequestBody User user) {
    //     if (repo.findByEmail(user.email) != null) {
    //         return new ResponseEntity<String>("email already exists", HttpStatus.BAD_REQUEST);
    //     } else {
    //         // User res = repo.save(new);
    //         repo.save(new User(user.firstname, user.lastname, user.username, user.password, user.role, user.email));
    //         return new ResponseEntity<String>("register success", HttpStatus.OK);
    //     }
    // }

    // @PostMapping("/login")
    // public ResponseEntity<?> login(@RequestBody User user) {
    //     User res = repo.findByEmail(user.email);
    //     if (res != null) {
    //         if (res.password.equals(user.password)) {
    //             return new ResponseEntity<>(res, HttpStatus.OK);
    //         } else {
    //             return new ResponseEntity<>("Wrong password", HttpStatus.BAD_REQUEST);
    //         }
    //     } else {
    //         return new ResponseEntity<>("Wrong email", HttpStatus.BAD_REQUEST);
    //     }

    // }

    // @PostMapping("/save")
    // public ResponseEntity<String> save(@RequestBody User user) {
    //     repo.save(user);
    //     return new ResponseEntity<>("Updated", HttpStatus.OK);
    // }

}