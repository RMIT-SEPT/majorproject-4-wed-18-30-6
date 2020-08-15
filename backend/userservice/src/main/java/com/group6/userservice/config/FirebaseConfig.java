package com.group6.userservice.config;

import com.google.cloud.firestore.Firestore;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FirebaseConfig {
    @Bean
    public Firestore getDb(){
        return com.google.firebase.cloud.FirestoreClient.getFirestore();
    }
}