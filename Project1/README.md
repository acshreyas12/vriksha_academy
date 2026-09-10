# Vriksha Academy — Full Stack Website

Presentation/learning-platform website for Vriksha Academy. It explains what D2C founders will learn without exposing the complete workshop implementation.

## Stack
- Frontend: React 19 + Vite + React Router 7
- Backend: Java 17 + Spring Boot 3 + Spring Data JPA
- Database: Embedded persistent H2 in MySQL mode (Zero-setup default) or MySQL 8+

## Quick Start (Zero Setup)

### Option A: Run Directly in VS Code
1. Open this folder (`D:\Vriksha_academy\Project1`) in VS Code.
2. Press `Ctrl + Shift + P` -> select **Tasks: Run Task** -> choose **Run Full Stack (Frontend + Backend)**.
   - Alternatively, open **Run & Debug** (or press `F5`) and choose **Full Stack (Spring Boot + Chrome)**.

### Option B: One-Click Runner (Windows)
Double-click `run-all.bat` in the project root. It will open two console windows:
- Backend: `http://localhost:8080` (H2 Console: `http://localhost:8080/h2-console`)
- Frontend: `http://localhost:5173`

### Option C: Manual Terminal Commands
#### 1. Backend
```bash
cd backend
mvn spring-boot:run
```
*(Automatically creates and seeds the 24 AI concepts on first startup).*

#### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173`.

---

## Database Configuration
- **Default (No setup required)**: Uses embedded persistent H2 in MySQL compatibility mode (`backend/data/vriksha_academy.mv.db`). The 24 AI concepts are seeded automatically upon startup.
- **Using External MySQL**: If you have MySQL installed, run `SOURCE database/schema.sql;` in your MySQL shell, then run the backend with:
  ```bash
  mvn spring-boot:run -Dspring-boot.run.profiles=mysql
  ```
  or set `spring.profiles.active=mysql` in `backend/src/main/resources/application.properties`.
