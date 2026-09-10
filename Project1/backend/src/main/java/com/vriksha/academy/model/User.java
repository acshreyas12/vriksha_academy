package com.vriksha.academy.model;
import jakarta.persistence.*; import java.time.LocalDateTime;
@Entity @Table(name="users") public class User {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id; @Column(nullable=false) String name; @Column(nullable=false,unique=true) String email; @Column(nullable=false) String password; @Column(name="created_at") LocalDateTime createdAt;
 @PrePersist void create(){createdAt=LocalDateTime.now();}
 public Long getId(){return id;} public String getName(){return name;} public String getEmail(){return email;} public String getPassword(){return password;} public void setName(String v){name=v;} public void setEmail(String v){email=v;} public void setPassword(String v){password=v;}
}
