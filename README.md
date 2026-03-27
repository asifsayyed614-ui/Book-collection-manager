# 📚 BookShelf — Book Collection Manager

A full-stack book collection manager built with **Next.js 14**, **MongoDB**, and **Tailwind CSS**.

---

## Features

- ✅ Add books with title, author, genre, year, and description
- 🗑️ Remove books with a confirmation dialog
- 🔍 Search books by title or author
- 🏷️ Filter by genre
- 📊 Collection stats (total books, authors, genres)
- 🎨 Beautiful parchment-themed UI

---

## Prerequisites

- Node.js 18+
- MongoDB (local or MongoDB Atlas)

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example env file and set your MongoDB URI:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/book-collection

# For MongoDB Atlas (replace with your connection string)
# MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/book-collection
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── books/
│   │       ├── route.ts          # GET all, POST new book
│   │       └── [id]/
│   │           └── route.ts      # DELETE, PUT single book
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main page
├── components/
│   ├── AddBookModal.tsx           # Modal to add a book
│   ├── BookCard.tsx               # Individual book card
│   ├── DeleteConfirmModal.tsx     # Delete confirmation dialog
│   ├── EmptyState.tsx             # Empty collection state
│   ├── GenreFilter.tsx            # Genre filter chips
│   ├── Header.tsx                 # Top navigation bar
│   ├── SearchBar.tsx              # Search input
│   └── StatsBar.tsx               # Collection statistics
├── lib/
│   ├── dbConnect.ts               # MongoDB connection helper
│   └── types.ts                   # TypeScript types & genre list
└── models/
    └── Book.ts                    # Mongoose Book schema
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books (supports `?genre=` and `?search=`) |
| POST | `/api/books` | Create a new book |
| DELETE | `/api/books/:id` | Delete a book by ID |
| PUT | `/api/books/:id` | Update a book by ID |

---

## Build for Production

```bash
npm run build
npm start
```
"# Book-collection-manager" 
