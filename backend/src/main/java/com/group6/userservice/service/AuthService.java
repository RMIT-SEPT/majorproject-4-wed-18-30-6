package com.group6.userservice.service;

import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.group6.userservice.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    //firestore
    
    Firestore dbFirestore = FirestoreClient.getFirestore();

    public User login(String username, String pass) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentSnapshot> apiFuture = dbFirestore.collection("users").document(username).get();
        DocumentSnapshot documentSnapshot = apiFuture.get();
        User log = documentSnapshot.toObject(User.class);

        if(log.getPassword() == pass){
			log.setLogintoken(documentSnapshot.getUpdateTime().toString());
            return log;
		}
		
        return null;
    }

    public User getLogin(String logintoken) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentSnapshot> apiFuture = dbFirestore.collection("users").document(logintoken).get();
        DocumentSnapshot documentSnapshot = apiFuture.get();
        User log = documentSnapshot.toObject(User.class);
		
        return log;
    }

    public User register(User user) throws InterruptedException, ExecutionException {
        dbFirestore.collection("users").document(user.getId()).set(user);

        DocumentReference documentReference = dbFirestore.collection("users").document(user.getId());
        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        User u = document.toObject(User.class);

        return u;
    }

    public User updateUserDetails(User user) throws InterruptedException, ExecutionException {
        dbFirestore.collection("users").document(user.getId()).set(user);

        DocumentReference documentReference = dbFirestore.collection("users").document(user.getId());
        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        User u = document.toObject(User.class);

        return u;
    }

    public User getUserDetail(String id) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = dbFirestore.collection("users").document(id);
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