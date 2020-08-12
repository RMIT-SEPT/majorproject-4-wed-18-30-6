package com.group6.userservice.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByEmail(String email);
    public List<User> findAll();
    public User findByPassword(String password);
}