package com.group6.userservice.config;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import javax.annotation.PostConstruct;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.FileInputStream;

import org.springframework.stereotype.Service;

@Service
public class FirebaseInitializr {

	@PostConstruct
    public void initialize() throws IOException {
        FileInputStream account =
  new FileInputStream("./sept-593ab-firebase-adminsdk-4muxx-90d6b2cf5f.json");

        InputStream serviceAccount = new URL("https://firebasestorage.googleapis.com/v0/b/sept-593ab.appspot.com/o/sept-593ab-firebase-adminsdk-4muxx-90d6b2cf5f.json?alt=media&token=31dc7e61-2fca-4def-9417-dd1b479d1e2a").openStream();

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(account))
                .setDatabaseUrl("https://sept-593ab.firebaseio.com").build();

        FirebaseApp.initializeApp(options);

    }

}