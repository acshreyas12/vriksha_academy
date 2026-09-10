package com.vriksha.academy.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vriksha.academy.model.User;
import com.vriksha.academy.service.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService service;

    public AuthController(UserService s) {
        this.service = s;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Register(
        @NotBlank(message = "Name is required") String name,
        @NotBlank(message = "Email is required") @Email(message = "Invalid email format") String email,
        @NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") String password
    ) {}

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Login(
        @NotBlank(message = "Email is required") @Email(message = "Invalid email format") String email,
        @NotBlank(message = "Password is required") String password
    ) {}

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody Register r) {
        User u = service.register(r.name(), r.email(), r.password());
        return ResponseEntity.status(201).body(Map.of("message", "Account created successfully", "user", safe(u)));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody Login r) {
        return service.login(r.email(), r.password())
            .<ResponseEntity<?>>map(u -> ResponseEntity.ok(Map.of("message", "Login successful", "user", safe(u))))
            .orElseGet(() -> ResponseEntity.status(401).body(Map.of("message", "Invalid email or password")));
    }

    private Map<String, Object> safe(User u) {
        return Map.of("id", u.getId(), "name", u.getName(), "email", u.getEmail());
    }
}
