package com.billease.controller;

import com.billease.model.Payment;
import com.billease.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @GetMapping("/bill/{billId}")
    public List<Payment> getPaymentsByBill(@PathVariable Long billId) {
        return paymentRepository.findByBillId(billId);
    }
    @PutMapping("/update-status/{id}")
    public Payment updatePaymentStatus(@PathVariable Long id, @RequestParam String status) {

        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setStatus(status);

        return paymentRepository.save(payment);
    }
}