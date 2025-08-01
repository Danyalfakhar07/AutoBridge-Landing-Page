import { Request, Response } from 'express';
import { saveContactMessage } from '../db';

export async function handleContactSubmit(req: Request, res: Response) {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message'
      });
    }

    // Validate email format
    if (!email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Validate message length
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long'
      });
    }

    // Save contact message to database
    const result = await saveContactMessage(name, email, message);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error in contact submit:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
} 