# Database Setup Guide

## PostgreSQL Configuration

### 1. Install PostgreSQL
Make sure PostgreSQL is installed on your system.

### 2. Create Database
```sql
CREATE DATABASE autobridge;
```

### 3. Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=autobridge
DB_PASSWORD=your_password_here
DB_PORT=5432

# Server Configuration
PING_MESSAGE=ping
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Start the Development Server
```bash
npm run dev
```

The database will be automatically initialized when the server starts.

## Database Schema

The application creates a `wishlist_emails` table with the following structure:

```sql
CREATE TABLE wishlist_emails (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

- `POST /api/wishlist` - Submit email to wishlist
  - Body: `{ "email": "user@example.com", "source": "popup" | "form" }`
  - Response: `{ "success": true, "isNew": true, "message": "Email saved successfully" }` 