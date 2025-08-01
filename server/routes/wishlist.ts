import { Request, Response } from 'express';
import { saveEmail } from '../db';

export async function handleWishlistSubmit(req: Request, res: Response) {
  try {
    const { email, source } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Validate source
    if (!source || !['popup', 'form'].includes(source)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid source specified'
      });
    }

    // Save email to database
    const result = await saveEmail(email, source);

    if (result.success) {
      return res.status(200).json({
        success: true,
        isNew: result.isNew,
        message: result.message
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error in wishlist submit:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
} 