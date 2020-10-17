package com.group6.userservice.config;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import javax.annotation.PostConstruct;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.springframework.stereotype.Service;

@Service
public class FirebaseInitializr {

    String cred = "{" +
       " \"type\": \"service_account\"," +
       " \"project_id\": \"sept-593ab\", " +
        " \"private_key_id\": \"90d6b2cf5fa3ed3e53e08a6b917708b9e0325db8\", " +
        " \"private_key\": \"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhqQ3ZHEnN+qz3\n9CW44IEDOa52p7nDoZTTTbjRHqTqnAaqtuo9SOLdYQcmRgwZ3p+Akpoaj08C1MRD\nJiCLuidq2NAloxtPuX/TmSu3TWbCA+cq0bdX0oP6AmqHH/FCEikB8zk3Sss/oB7l\nua2OUpH6YUc94019408kmpP/bCRL4pZ5nBikD8aj2Gqn/Ayjb7UscMQGjgeA2OVP\nl5YX2QJzA7bVr938dcsQd6wOj5+jKpcsUwzMqnkNGMJW1dVd6CFUAZ3olDMDi8yL\nA+7fN9CWT/coYfZZPLWNQrevVZ9OqngEUfhm2W+laJUFCpCLt36xWgxF1WIEMAJk\nQ+O+4kc1AgMBAAECggEAWywQ3sO5pAGgScv4Q7JdHZ77+I+6k6pgdWEFB2SQsANb\nBDVD/X/JvTTbDSEm+XrDSdCxd4KoIxYwt4qbgqizDU3NBy/XtIXXeff8PCKHHmMy\nTlAN+eshjGzWeoKy2IV60QFigA71gF7irOEwmHyO4zDTdlM0d2TUEI9ttTiNj6SZ\nrxxFG6JVTcAfrcrq5ulc4eXwo7nKHsi6wNaSSdq0BHDKV3qK9Ap3B/ElGcOcZ6c2\ne66qtYDbC2ClL1BCdNtJ1RhPDkmb849D4PbCJxcIGbMU9DE/zpQEiOo9LwTt5bhb\nC1OT/23lLuP+eWTYwtdxpEqdlT5Hsxi4IygbD4GCbwKBgQD+H0s+8JqL/PHMuCVt\nb72B3Q5V7SH1LfP/VFZ0G27ebA9cwZtPCHFuENyGpWUWsAtcZOEy8QDGtasLJfuc\nrnNMF0u4Rfp1ryjw5Jfuj9DlH8UfNhtfus5U+k8DcZESAvrlxY+38+MeHYb+4qHK\nMBEkMlCcMIbqL1XGRSVqBw55FwKBgQDjU+u1gkpu7psdGBiNbHmZjcjv4QroThSw\nIjbW91WDy1oN0pRH9qXIgBSbivgTKzr54JhcT0oSmJhrZa9ZlJOMDMJ22JiRQWLR\n5v1hkbC+lfUdekMbmOXWMYSP5B95AqFbPucTKvp9Pi2610UD8pVReTgMrkdHwyLh\nLbrvJuyZkwKBgCtS4Hwxfteg3wRc3JyksTVDn58Ml356QB/mm/qddrBa0d+pbjXy\nJYxzOXWHGw3cI4Oz+yS5K7202R1Ec3oJz8RIMHOREpsfqqYvAqv8PsvhN7UTf2U5\nrtWT+waGRQpCEc48eT0OSkknFY28y4Jx4Wo/XbjTGR0xxrjPrwo9e70vAoGBAK93\npWbTDNUXg88vPDRdWHb4A/N0h1DMhBd4MVA4VV+HZRlqQ15QuaJLipyM5fMV2U3q\n2G/YG9rCwlOTh4fjsQfXCXtmsEzeZYKTg1z+caiKY0q/hnEU0cNFMYdHlCt5pkai\nBQa8k+B8UBv58aGcazkaEfNnyklQC+o3vCTArLvVAoGAd0N0kU0q0mwcZyGAVeLB\nwB82gmHXsae1IuX+34RveNAJY+AmEsMNZm7YtO1CUhIlhjS9hpCSfO0iKFj1MI/F\nCGC5QipNXyUM0yFH9B4Ue6GtQM3VpU7bcE9BiherbTLI5MkiUb9xXgH8HLh55ZuV\nj+vvKT85K0RKB/iXx9+PTV0=\n-----END PRIVATE KEY-----\n\", " +
        " \"client_email\": \"firebase-adminsdk-4muxx@sept-593ab.iam.gserviceaccount.com\", " +
        " \"client_id\": \"114214740321143621496\", " +
        " \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\", "+
        " \"token_uri\": \"https://oauth2.googleapis.com/token\", " +
        " \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\", " +
        " \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4muxx%40sept-593ab.iam.gserviceaccount.com\"" +
      "}";
	@PostConstruct
    public void initialize() throws IOException {
        InputStream serviceAccount = new URL("https://firebasestorage.googleapis.com/v0/b/sept-593ab.appspot.com/o/sept-593ab-firebase-adminsdk-4muxx-90d6b2cf5f.json?alt=media&token=31dc7e61-2fca-4def-9417-dd1b479d1e2a").openStream();

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://sept-593ab.firebaseio.com").build();

        FirebaseApp.initializeApp(options);

    }

}