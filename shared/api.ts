/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export async function submitWishlistEmail(email: string, source: 'popup' | 'form') {
  try {
    const response = await fetch('/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit email');
    }

    return data;
  } catch (error) {
    console.error('Error submitting wishlist email:', error);
    throw error;
  }
}

export async function submitContactForm(name: string, email: string, message: string) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}
