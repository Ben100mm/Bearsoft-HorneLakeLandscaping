# Horne Lake Landscaping

A production-ready full-stack website for Horne Lake Landscaping, built with React (Vite), Tailwind CSS, Node.js, and Express.js.

## Project Structure

```
.
├── frontend/          # React + Vite frontend application
├── backend/          # Node.js + Express backend API
└── .cursor/          # Cursor IDE rules and principles
```

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- Fully responsive design

### Backend
- Node.js
- Express.js
- CORS enabled
- dotenv for environment variables
- REST API architecture

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, defaults to `http://localhost:5000`):
```env
VITE_API_BASE_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Edit the `.env` file with your configuration:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

## How Frontend Connects to Backend

1. **API Configuration**: The frontend uses Axios configured in `frontend/src/api/contactApi.js` to make HTTP requests to the backend.

2. **Base URL**: The API base URL is set via the `VITE_API_BASE_URL` environment variable (defaults to `http://localhost:5000`).

3. **CORS**: The backend is configured with CORS to allow requests from the frontend URL specified in `FRONTEND_URL` environment variable.

4. **Contact Form Flow**:
   - User fills out the contact form on the frontend
   - Form submission triggers `submitContactForm()` from `contactApi.js`
   - Request is sent to `POST /api/contact` endpoint
   - Backend validates the data and stores it in memory
   - Backend logs the submission and returns a success response
   - Frontend displays success/error message to the user

## Available Pages

- **Home** (`/`) - Hero section, services overview, about section, and testimonials
- **Services** (`/services`) - Detailed view of all landscaping services
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and business information

## API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "message": "I'm interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Features

- ✅ Fully responsive design
- ✅ Modern, clean landscaping theme (green color scheme)
- ✅ SEO-friendly structure
- ✅ Contact form with validation
- ✅ Modular component architecture
- ✅ Error handling
- ✅ Form submission logging
- ✅ Email-ready data structure (ready for email service integration)

## Development

### Running Both Servers

You'll need to run both frontend and backend servers simultaneously. Open two terminal windows:

**Terminal 1 (Frontend):**
```bash
cd frontend
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd backend
npm run dev
```

## Production Build

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`

### Backend
The backend is ready for production. Make sure to:
- Set `NODE_ENV=production` in your `.env` file
- Configure proper CORS origins
- Set up a production email service
- Replace in-memory storage with a database

## Next Steps

To enhance this project, consider:
- Adding a database (MongoDB, PostgreSQL, etc.)
- Integrating a real email service (SendGrid, Mailgun, etc.)
- Adding image upload functionality
- Implementing authentication for admin panel
- Adding a blog section
- Integrating payment processing for quotes

## License

ISC
