# MongoDB Atlas Setup for AutoBridge

## Quick Setup

### 1. Create Environment File
Create a `.env` file in the project root with your MongoDB Atlas URI:

```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_atlas_connection_string_here

# Server Configuration
PING_MESSAGE=ping
```

### 2. Replace the URI
Replace `your_mongodb_atlas_connection_string_here` with your actual MongoDB Atlas connection string.

### 3. Start the Server
```bash
npm run dev
```

## MongoDB Atlas Connection String Format
Your connection string should look like this:
```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

## Database Schema
The application will automatically create a `wishlist_emails` collection with this structure:

```javascript
{
  _id: ObjectId,
  email: String (unique),
  source: String ("popup" or "form"),
  created_at: Date
}
```

## Features
- ✅ Email storage in MongoDB Atlas
- ✅ Duplicate email prevention
- ✅ Source tracking (popup vs form)
- ✅ Automatic indexing for performance
- ✅ Error handling and validation

## Testing
1. Start the server: `npm run dev`
2. Open the website
3. Submit emails through popup or form
4. Check your MongoDB Atlas dashboard to see the data

That's it! Much simpler than PostgreSQL setup. 