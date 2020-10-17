package com.group6.userservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.group6.userservice.models.Bookings;
import com.group6.userservice.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;

@Service
public class BookingService {
    
    Firestore dbFirestore = FirestoreClient.getFirestore();

    public boolean createBooking(Bookings book) throws InterruptedException, ExecutionException {
        book.setId(UUID.randomUUID().toString());;
        ApiFuture<WriteResult> apiFuture = dbFirestore.collection("bookings").document(book.getId()).set(book);
        if (apiFuture.isCancelled()){
            throw new InterruptedException("failed");
        } else{
            return true;
        }     
    }

    public List<Bookings> getBookings(User user) throws InterruptedException, ExecutionException {
        CollectionReference book = dbFirestore.collection("bookings");
        Query query = book.whereEqualTo("booker", user.getId());
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<Bookings> bookings = new ArrayList<>();

        for (DocumentSnapshot document : querySnapshot.get().getDocuments()){
            bookings.add(document.toObject(Bookings.class));
        }

        return bookings;
    }

    public boolean updateBooking(Bookings booking) throws InterruptedException {
        DocumentReference book = dbFirestore.collection("bookings").document(booking.getId());
        ApiFuture<WriteResult> future = book.set(booking);
        if (future.isCancelled()){
            throw new InterruptedException("failed");
        } else{
            return true;
        }   
    }

    public boolean cancelBooking(String bookingId) throws InterruptedException {
        DocumentReference book = dbFirestore.collection("bookings").document(bookingId);
        ApiFuture<WriteResult> future = book.update("booker", null);
        if (future.isCancelled()){
            throw new InterruptedException("failed");
        } else{
            return true;
        }   
    }
}
