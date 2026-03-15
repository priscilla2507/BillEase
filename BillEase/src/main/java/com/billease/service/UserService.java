package com.billease.service;

import com.billease.model.User;
import com.billease.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // Get All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User login(String email, String password) {

        return userRepository.findByEmailAndPassword(email, password)
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

    }

}