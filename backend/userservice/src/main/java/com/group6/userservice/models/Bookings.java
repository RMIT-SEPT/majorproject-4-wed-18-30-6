package com.group6.userservice.models;

import java.util.Date;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {
    private String id;
    private String worker;
    private Services service;
    private Date due;
    private String booker;
    private Date time;
    private double price;

    public Bookings(String worker, Services service, Date due, String booker, Date time, double price){
       this.id =  UUID.randomUUID().toString();
       this.worker = worker;
       this.service = service;
       this.due = due;
       this.booker = booker;
       this.time = time;
       this.price = price;
    }
}
