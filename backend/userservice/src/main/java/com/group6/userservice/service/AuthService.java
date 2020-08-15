package com.group6.userservice.service;

import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.group6.userservice.user.User;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    Firestore dbFirestore = FirestoreClient.getFirestore();

    public String login(String username, String pass) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentSnapshot> apiFuture = dbFirestore.collection("users").document(username).get();
        DocumentSnapshot documentSnapshot = apiFuture.get();
        User log = documentSnapshot.toObject(User.class);

        if(log.password == pass){
            return documentSnapshot.getUpdateTime().toString();
        } else {
            return "Wrong username/password";
        }
        
    }

    public String register(User user) throws InterruptedException, ExecutionException {
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("users").document(user.getUsername()).set(user);
        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public User getUserDetail(String username) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = dbFirestore.collection("users").document(username);
        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        User user = null;

        if (document.exists()) {
            user = document.toObject(User.class);
            return user;
        } else {
            return user;
        }
    }
}