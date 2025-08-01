@echo off
echo ========================================
echo AutoBridge Database Setup
echo ========================================
echo.

echo Step 1: Checking if PostgreSQL is installed...
where psql >nul 2>nul
if %errorlevel% neq 0 (
    echo PostgreSQL is not installed or not in PATH.
    echo.
    echo Please install PostgreSQL from: https://www.postgresql.org/download/windows/
    echo After installation, run this script again.
    pause
    exit /b 1
)

echo PostgreSQL found! ✓
echo.

echo Step 2: Creating .env file...
if not exist .env (
    echo Creating .env file...
    echo # Database Configuration > .env
    echo DB_USER=postgres >> .env
    echo DB_HOST=localhost >> .env
    echo DB_NAME=autobridge >> .env
    echo DB_PASSWORD=your_postgres_password_here >> .env
    echo DB_PORT=5432 >> .env
    echo. >> .env
    echo # Server Configuration >> .env
    echo PING_MESSAGE=ping >> .env
    echo .env file created! ✓
    echo.
    echo IMPORTANT: Edit .env file and replace 'your_postgres_password_here' with your actual PostgreSQL password!
    echo.
) else (
    echo .env file already exists ✓
)

echo Step 3: Creating database...
echo Please enter your PostgreSQL password when prompted:
psql -U postgres -c "CREATE DATABASE autobridge;" 2>nul
if %errorlevel% equ 0 (
    echo Database 'autobridge' created successfully! ✓
) else (
    echo Database might already exist or there was an error.
    echo You can manually create it by running: psql -U postgres -c "CREATE DATABASE autobridge;"
)

echo.
echo Step 4: Installing dependencies...
npm install

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env file with your PostgreSQL password
echo 2. Run: npm run dev
echo 3. Test the email submission on the website
echo.
pause 