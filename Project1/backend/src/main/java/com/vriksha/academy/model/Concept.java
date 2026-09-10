package com.vriksha.academy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "concepts")
public class Concept {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "concept_number", nullable = false, unique = true)
    private Integer conceptNumber;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    public Concept() {}

    public Concept(Integer conceptNumber, String title, String category, String description) {
        this.conceptNumber = conceptNumber;
        this.title = title;
        this.category = category;
        this.description = description;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Integer getConceptNumber() { return conceptNumber; }
    public void setConceptNumber(Integer conceptNumber) { this.conceptNumber = conceptNumber; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
