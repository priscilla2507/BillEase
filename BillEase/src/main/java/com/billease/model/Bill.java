package com.billease.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bills")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String billType;

    private Double amount;

    private LocalDate dueDate;

    private String status;
    
    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;

	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bill(Long id, Long userId, String billType, Double amount, LocalDate dueDate, String status) {
		super();
		this.id = id;
		this.userId = userId;
		this.billType = billType;
		this.amount = amount;
		this.dueDate = dueDate;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getBillType() {
		return billType;
	}

	public void setBillType(String billType) {
		this.billType = billType;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDueDate() {
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
    
}