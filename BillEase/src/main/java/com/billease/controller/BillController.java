package com.billease.controller;

import com.billease.model.Bill;
import com.billease.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bills")
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

    @Autowired
    private BillService billService;

    @PostMapping("/create")
    public Bill createBill(@RequestBody Bill bill) {
        return billService.createBill(bill);
    }

    @GetMapping("/user/{userId}")
    public List<Bill> getBillsByUser(@PathVariable Long userId) {
        return billService.getBillsByUser(userId);
    }

}