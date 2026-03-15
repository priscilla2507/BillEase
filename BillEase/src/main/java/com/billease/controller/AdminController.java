package com.billease.controller;

import com.billease.model.User;
import com.billease.model.Bill;
import com.billease.model.Payment;

import com.billease.repository.UserRepository;
import com.billease.repository.BillRepository;
import com.billease.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    // View all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // View all bills
    @GetMapping("/bills")
    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    // View all payments
    @GetMapping("/payments")
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

}