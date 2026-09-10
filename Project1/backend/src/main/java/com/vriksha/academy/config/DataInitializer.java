package com.vriksha.academy.config;

import com.vriksha.academy.model.Concept;
import com.vriksha.academy.repository.ConceptRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ConceptRepository conceptRepository;

    public DataInitializer(ConceptRepository conceptRepository) {
        this.conceptRepository = conceptRepository;
    }

    @Override
    public void run(String... args) {
        if (conceptRepository.count() == 0) {
            List<Concept> initialConcepts = List.of(
                new Concept(1, "The Model (LLM)", "Foundations", "Understand the AI model as the engine behind responses."),
                new Concept(2, "Tokens", "Foundations", "Learn how AI reads and writes in pieces of text."),
                new Concept(3, "Prompt & System Prompt", "Foundations", "Separate permanent instructions from today’s task."),
                new Concept(4, "Context Window", "Foundations", "Understand how much information AI can handle at one time."),
                new Concept(5, "The Agent Loop", "Foundations", "Try, check, fix and repeat."),
                new Concept(6, "Skills", "Capabilities", "Turn repeatable jobs into reusable instructions."),
                new Concept(7, "Tools", "Capabilities", "Let AI use business software and utilities."),
                new Concept(8, "Commands", "Capabilities", "Use quick instructions for recurring tasks."),
                new Concept(9, "Memory", "Capabilities", "Retain useful brand information for future work."),
                new Concept(10, "Context", "Capabilities", "Give AI the information relevant right now."),
                new Concept(11, "Agents", "Capabilities", "End-to-end virtual teammates for specific jobs."),
                new Concept(12, "Sub-Agents", "Capabilities", "Specialist helpers that divide the work."),
                new Concept(13, "Workflows", "Capabilities", "Fixed steps like a business SOP."),
                new Concept(14, "Orchestrations", "Capabilities", "Coordinate multiple AI teammates."),
                new Concept(15, "MCPs", "Capabilities", "Adapters that help AI connect to software."),
                new Concept(16, "Connectors", "Capabilities", "Live hookups to stores, ads, inboxes and tools."),
                new Concept(17, "Artifacts", "Capabilities", "Useful deliverables AI creates and you keep."),
                new Concept(18, "RAG / Retrieval", "The Bridge", "Pull the right information from your own documents."),
                new Concept(19, "Structured Output", "The Bridge", "Return clean, organized information."),
                new Concept(20, "Evals / Testing", "The Ceiling", "Test AI for accuracy and brand alignment."),
                new Concept(21, "Guardrails / Safety", "The Ceiling", "Rules that stop unsafe or unapproved actions."),
                new Concept(22, "Human-in-the-loop", "The Ceiling", "Draft first, approve before important actions."),
                new Concept(23, "Cost, Speed & Observability", "The Ceiling", "Watch usage, performance and activity."),
                new Concept(24, "AI Teammate, End to End", "Finale", "Bring the pieces together into one AI teammate.")
            );
            conceptRepository.saveAll(initialConcepts);
            System.out.println("Vriksha Academy: Successfully seeded 24 AI concepts.");
        }
    }
}
