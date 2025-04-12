# 🔖 Bookmarker Hub

A modern web application for organizing and managing your bookmarks with ease.

## ✨ Features

- 📱 Responsive design that works on desktop and mobile
- 🌓 Dark/Light mode support
- 🔍 Search functionality for quick bookmark access
- 🏷️ Category-based organization (Work, Study, Entertainment)
- 🚀 Quick actions: Visit URL, Copy Link, Delete
- 💨 Real-time updates with automatic refresh
- 🎯 Clean and intuitive user interface

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - React Router for navigation
  - React Icons for UI elements
  - React Toastify for notifications
  - React Tooltip for enhanced UX
  - Axios for API requests

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose ODM
  - CORS for cross-origin support

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB installed and running
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rushikesh-geek/bookmarker_hub.git
cd bookmarker_hub
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookmarker_hub
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

1. Add new bookmarks using the form at the top
2. Search bookmarks using the search bar
3. Filter bookmarks by category
4. Use quick actions on each bookmark:
   - Visit website
   - Copy URL
   - Delete bookmark
5. Toggle dark/light mode using the theme switch

## 📝 API Endpoints

- `GET /bookmarks` - Get all bookmarks
- `POST /bookmarks` - Create new bookmark
- `PUT /bookmarks/:id` - Update bookmark
- `DELETE /bookmarks/:id` - Delete bookmark

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Author

**Rushikesh**
- GitHub: [@rushikesh-geek](https://github.com/rushikesh-geek)

## 🙏 Acknowledgments

- React Icons for the beautiful icons
- MongoDB for the excellent database
- The amazing open-source community
