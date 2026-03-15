package com.billease.service;

import com.billease.model.Bill;
import com.billease.model.Payment;
import com.billease.repository.BillRepository;
import com.billease.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    public Bill createBill(Bill bill) {
        bill.setStatus("Pending");
        return billRepository.save(bill);
    }

    public List<Bill> getBillsByUser(Long userId) {
        return billRepository.findByUserId(userId);
    }

    // Pay Bill Method
    public Bill payBill(Long billId) {

        Bill bill = billRepository.findById(billId)
                .orElseThrow(() -> new RuntimeException("Bill not found"));

        bill.setStatus("Paid");
        billRepository.save(bill);

        Payment payment = new Payment();
        payment.setBillId(billId);
        payment.setAmount(bill.getAmount());
        payment.setPaymentMethod("Online");
        payment.setPaymentDate(LocalDate.now());

        paymentRepository.save(payment);

        return bill;
    }
}