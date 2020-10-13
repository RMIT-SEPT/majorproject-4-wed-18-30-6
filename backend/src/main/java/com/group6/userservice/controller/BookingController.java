package com.group6.userservice.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.group6.userservice.models.Bookings;
import com.group6.userservice.service.BookingService;
import com.group6.userservice.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BookingController {
	@Autowired
	BookingService service;

	@GetMapping("/user/get/bookings")
	@ResponseBody
	public List<Bookings> getBookings(@RequestBody User user) {
		try {
			return service.getBookings(user);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

		return new ArrayList<Bookings>();
	}

	@PostMapping("/user/update/bookings")
	@ResponseBody
	public ResponseEntity<String> updateBookings(@RequestBody Bookings booking) {
		String res = "fail";
		try {
			if (service.updateBooking(booking)) {
				res = "update success";
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
        return ResponseEntity.ok(res);
    }

    @PostMapping("/user/create/bookings")
    @ResponseBody
    public ResponseEntity<String> createBook(@RequestBody Bookings book){
		String res = "fail";
		try {
			if (service.createBooking(book)) {
				res = "update success";
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

        return ResponseEntity.ok(res);
    }

    @PostMapping("/user/cancel/bookings")
    @ResponseBody
    public ResponseEntity<String> cancelBooking(@RequestBody String bookId){
		String res = "fail";
		try {
			if (service.cancelBooking(bookId)) {
				res = "update success";
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
        return ResponseEntity.ok(res);
    }
}