package com.vriksha.academy.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vriksha.academy.model.Enquiry;
import com.vriksha.academy.repository.EnquiryRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {
    private final EnquiryRepository repo;

    public EnquiryController(EnquiryRepository r) {
        this.repo = r;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Request(
        @NotBlank(message = "Name is required") String name,
        @NotBlank(message = "Email is required") @Email(message = "Invalid email format") String email,
        String company,
        String sessionType,
        String message
    ) {}

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Request r) {
        Enquiry e = new Enquiry();
        e.setName(r.name().trim());
        e.setEmail(r.email().trim().toLowerCase());
        e.setCompany(r.company() != null ? r.company().trim() : null);
        e.setSessionType(r.sessionType());
        e.setMessage(r.message() != null ? r.message().trim() : null);
        repo.save(e);
        return ResponseEntity.ok(Map.of("message", "Thanks. Your enquiry has been received."));
    }
}
