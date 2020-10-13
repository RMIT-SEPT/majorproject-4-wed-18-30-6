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
	public User getUserDetails(@RequestHeader() String username) {
		try {
			return firebaseService.getUserDetail(username);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

		return null;
	}

	@GetMapping("/updateuserdetails")
	public User updateUserDetails(@RequestBody() User user) {
		try {
			return firebaseService.updateUserDetails(user);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

		return null;
	}

	@PostMapping("/register")
	public User registerEndpoint(@RequestBody User user) {
		try {
			return firebaseService.register(user);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

		return null;
	}

	@PostMapping("/login")
	@ResponseBody
	public String loginEndpoint(@RequestBody String username, String pass) {
		try {
			firebaseService.login(username, pass);
			return UUID.randomUUID().toString();
		} catch (ExecutionException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		return "";
    }


}