# KodBank 🏦

**Live Application:** [https://kodbank-sigma.vercel.app/](https://kodbank-sigma.vercel.app/)

KodBank is a modern, secure, and visually stunning web-based banking application. It features a sleek glassmorphism design system, secure JWT-based authentication, and an intelligent AI Customer Support Chatbot powered by the Hugging Face Serverless Inference API.

## ✨ Features

- **Modern Glassmorphism UI**: Beautiful, fully responsive frontend utilizing translucent components, animated gradients, and lucid iconography.
- **Secure Authentication System**:
  - JWT (JSON Web Tokens) for secure session management.
  - Access and Refresh token rotation.
  - Robust handling of Cross-Site restrictions (localStorage fallback mechanisms for Vercel deployment).
  - Passwords hashed securely using bcrypt.
- **Intelligent Customer Support AI**: Built explicitly with `meta-llama/Llama-3.1-8B-Instruct` via the Hugging Face API to provide safe, strictly-prompted financial support without hallucinating protected data.
- **Comprehensive Financial Dashboard**:
  - Encrypted privacy-first balance display (hidden by default).
  - Spending velocity charts and recent transaction histories.
- **Expanded Account Capabilities**:
  - **Cards Module**: Manage mock Premium Credit and Virtual Debit Cards.
  - **Assets Module**: Track portfolios covering Stocks, Crypto, and Real Estate.
  - **Analytics Module**: Visual breakdown of financial inflows and outflows.
  - **Profile & Settings**: Manage user preferences, language settings, and simulated application security states.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js (via Vite)
- **Routing**: React Router DOM (v6)
- **Styling**: Pure CSS (Custom Glassmorphism architecture)
- **Icons**: Lucide-React
- **API Client**: Axios (with custom interceptors for token refresh)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL (using `mysql2` driver)
- **Security**: Helmet, CORS, Express Rate Limit
- **Authentication**: JWT & Cookie-parser
- **AI Integration**: `@huggingface/inference`

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MySQL Server running locally or in the cloud.
- A Hugging Face account and an active **Fine-grained Access Token** (for AI Inference).

### 1. Clone the repository
```bash
git clone https://github.com/shettyprasad-git/kodbank.git
cd kodbank
```

### 2. Backend Setup
```bash
cd kodbank-backend
npm install
```
Create a `.env` file in the `kodbank-backend` directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=kodbank_db
DB_PORT=3306

JWT_ACCESS_SECRET=your_super_secret_access_key
JWT_REFRESH_SECRET=your_super_secret_refresh_key
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Hugging Face token required for the AI chatbot to function
HF_TOKEN=hf_your_huggingface_inference_token
```

Start the backend server:
```bash
npm run dev
```
*(Runs by default on `http://localhost:5000`)*

### 3. Frontend Setup
```bash
# Open a new terminal
cd kodbank-frontend
npm install
```
Create a `.env.local` file in the `kodbank-frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```
*(Runs by default on `http://localhost:5173`)*

## 🌐 Deployment (Vercel)

KodBank is optimized for deployment on Vercel.

1. **Backend**: 
   - Deploy the `kodbank-backend` directory to Vercel. 
   - Add all `.env` environment variables to the Vercel project settings, ensuring `FRONTEND_URL` points to your deployed frontend.
2. **Frontend**: 
   - Deploy the `kodbank-frontend` directory to Vercel.
   - Set the `VITE_API_URL` environment variable to your deployed backend URL.

*Note: Due to restrictive third-party cookie constraints across Vercel subdomains on modern browsers, the application intelligently leverages `localStorage` to securely pass Bearer tokens natively to bypass Cross-Site blockages.*

## 🤝 Contributing
Contributions are always welcome. Please feel free to fork the repository and submit a Pull Request.

## 📄 License
This project is licensed under the MIT License.
