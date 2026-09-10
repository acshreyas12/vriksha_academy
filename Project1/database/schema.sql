CREATE DATABASE IF NOT EXISTS vriksha_academy;
USE vriksha_academy;

CREATE TABLE IF NOT EXISTS users (
 id BIGINT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(120) NOT NULL,
 email VARCHAR(180) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS enquiries (
 id BIGINT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(120) NOT NULL,
 email VARCHAR(180) NOT NULL,
 company VARCHAR(180),
 session_type VARCHAR(100),
 message TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS concepts (
 id BIGINT AUTO_INCREMENT PRIMARY KEY,
 concept_number INT NOT NULL UNIQUE,
 title VARCHAR(180) NOT NULL,
 category VARCHAR(80) NOT NULL,
 description TEXT NOT NULL,
 INDEX idx_concepts_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT IGNORE INTO concepts(concept_number,title,category,description) VALUES
(1,'The Model (LLM)','Foundations','Understand the AI model as the engine behind responses.'),
(2,'Tokens','Foundations','Learn how AI reads and writes in pieces of text.'),
(3,'Prompt & System Prompt','Foundations','Separate permanent instructions from today’s task.'),
(4,'Context Window','Foundations','Understand how much information AI can handle at one time.'),
(5,'The Agent Loop','Foundations','Try, check, fix and repeat.'),
(6,'Skills','Capabilities','Turn repeatable jobs into reusable instructions.'),
(7,'Tools','Capabilities','Let AI use business software and utilities.'),
(8,'Commands','Capabilities','Use quick instructions for recurring tasks.'),
(9,'Memory','Capabilities','Retain useful brand information for future work.'),
(10,'Context','Capabilities','Give AI the information relevant right now.'),
(11,'Agents','Capabilities','End-to-end virtual teammates for specific jobs.'),
(12,'Sub-Agents','Capabilities','Specialist helpers that divide the work.'),
(13,'Workflows','Capabilities','Fixed steps like a business SOP.'),
(14,'Orchestrations','Capabilities','Coordinate multiple AI teammates.'),
(15,'MCPs','Capabilities','Adapters that help AI connect to software.'),
(16,'Connectors','Capabilities','Live hookups to stores, ads, inboxes and tools.'),
(17,'Artifacts','Capabilities','Useful deliverables AI creates and you keep.'),
(18,'RAG / Retrieval','The Bridge','Pull the right information from your own documents.'),
(19,'Structured Output','The Bridge','Return clean, organized information.'),
(20,'Evals / Testing','The Ceiling','Test AI for accuracy and brand alignment.'),
(21,'Guardrails / Safety','The Ceiling','Rules that stop unsafe or unapproved actions.'),
(22,'Human-in-the-loop','The Ceiling','Draft first, approve before important actions.'),
(23,'Cost, Speed & Observability','The Ceiling','Watch usage, performance and activity.'),
(24,'AI Teammate, End to End','Finale','Bring the pieces together into one AI teammate.');
