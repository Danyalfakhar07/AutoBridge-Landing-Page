import { MongoClient, Db } from 'mongodb';
import 'dotenv/config';

let client: MongoClient;
let db: Db;

// MongoDB configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/autobridge';

export async function connectToDatabase() {
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db();
    console.log('Connected to MongoDB Atlas successfully');
    
    // Create indexes for better performance
    await db.collection('wishlist_emails').createIndex({ email: 1 }, { unique: true });
    await db.collection('wishlist_emails').createIndex({ created_at: -1 });
    
    console.log('Database indexes created successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Save email to database
export async function saveEmail(email: string, source: 'popup' | 'form') {
  try {
    const collection = db.collection('wishlist_emails');
    
    // Check if email already exists
    const existingEmail = await collection.findOne({ email });
    
    if (existingEmail) {
      return {
        success: true,
        isNew: false,
        message: 'Email already exists'
      };
    }
    
    // Insert new email
    await collection.insertOne({
      email,
      source,
      created_at: new Date()
    });
    
    return {
      success: true,
      isNew: true,
      message: 'Email saved successfully'
    };
  } catch (error) {
    console.error('Error saving email:', error);
    return {
      success: false,
      error: 'Failed to save email'
    };
  }
}

// Save contact message to database
export async function saveContactMessage(name: string, email: string, message: string) {
  try {
    const collection = db.collection('contact_messages');
    
    // Insert new contact message
    await collection.insertOne({
      name,
      email,
      message,
      created_at: new Date()
    });
    
    return {
      success: true,
      message: 'Message sent successfully'
    };
  } catch (error) {
    console.error('Error saving contact message:', error);
    return {
      success: false,
      error: 'Failed to send message'
    };
  }
}

// Get all emails (for admin purposes)
export async function getAllEmails() {
  try {
    const collection = db.collection('wishlist_emails');
    return await collection.find({}).sort({ created_at: -1 }).toArray();
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw error;
  }
}

// Close database connection
export async function closeConnection() {
  if (client) {
    await client.close();
  }
}

export { db }; 