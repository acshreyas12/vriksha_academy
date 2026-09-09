@echo off
setlocal
echo ===================================================
echo     Push Vriksha Academy to GitHub
echo ===================================================
echo.
set PATH=C:\Users\LENOVO\AppData\Local\Programs\Git\cmd;C:\Users\LENOVO\AppData\Local\Programs\gh\bin;%PATH%

echo Checking GitHub login status...
gh auth status >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo You need to authenticate with GitHub (shreyas@vriksha.ai).
    echo Please follow the prompts in the terminal / browser.
    echo.
    gh auth login -h github.com -p https -w
)

echo.
echo Creating / syncing repository with GitHub...
gh repo create vriksha-academy --public --source=. --remote=origin --push 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo If repository already exists, pushing updates to main...
    git push -u origin main
)

echo.
echo ===================================================
echo   Successfully pushed to GitHub!
echo   Repository Link:
git remote get-url origin
echo ===================================================
echo.
pause