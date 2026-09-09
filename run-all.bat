@echo off
echo ===================================================
echo   Starting Vriksha Academy Full Stack Application
echo ===================================================
echo.

set JAVA_HOME=C:\Users\LENOVO\AppData\Local\Programs\Microsoft\jdk-17.0.10.7-hotspot
set PATH=C:\Users\LENOVO\AppData\Local\Programs\apache-maven-3.9.9\bin;%JAVA_HOME%\bin;%PATH%

echo [1/2] Starting Spring Boot Backend on http://localhost:8080 ...
start "Vriksha Academy - Backend (Spring Boot)" cmd /k "cd /d %~dp0Project1\backend && mvn spring-boot:run"

echo [2/2] Starting React Frontend on http://localhost:5173 ...
start "Vriksha Academy - Frontend (Vite)" cmd /k "cd /d %~dp0Project1\frontend && npm run dev"

echo.
echo Both services are starting in separate windows!
echo Backend:  http://localhost:8080 (H2 Console: http://localhost:8080/h2-console)
echo Frontend: http://localhost:5173
echo.