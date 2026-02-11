# Landscaping Backend API

Backend API server for the landscaping business website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Validation:**
- `name` (required, string)
- `email` (required, valid email format)
- `phone` (optional, validated format)
- `message` (required, string)

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

### GET `/api/health`
Health check endpoint.

## Contact Form Submissions

Currently, contact form submissions are:
- Stored in memory (array)
- Logged to console with full details
- Formatted as email-ready data structure

To integrate with an email service, modify `src/controllers/contactController.js` to send the email data to your preferred email service provider.

## Error Handling

All errors are handled by the error middleware and return appropriate HTTP status codes and error messages.
