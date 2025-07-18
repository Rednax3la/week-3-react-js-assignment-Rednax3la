[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19957649&assignment_repo_type=AssignmentRepo)
# React.js & Tailwind CSS Assignment

This repository implements a responsive React application using Vite and Tailwind CSS, showcasing component architecture, state management, hooks, and external API integration.

---

## Project Structure

```
src/
├── api/              # Functions for API calls
│   └── fetchData.js
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Navbar.jsx
├── context/          # React Context providers
│   └── AppContext.jsx
├── hooks/            # Custom React hooks
│   └── useFetch.js
├── pages/            # Page-level components
│   ├── Home.jsx
│   └── Details.jsx
├── utils/            # Utility functions
│   └── formatDate.js
├── App.jsx           # Main application component
├── main.jsx          # Entry point
└── index.css         # Tailwind imports & custom styles
```

---

## README.md

````markdown
# React.js & Tailwind CSS Assignment

## Prerequisites
- Node.js v18+
- npm or yarn
- Modern browser

## Setup

1. **Clone Repo**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   ```

## Features

* **Component Architecture**: Reusable `Navbar`, `Button`, `Card`, etc.
* **State Management**: React `useState` and Context API
* **Hooks**: Custom `useFetch` for API calls
* **API Integration**: Fetch data from \[Your API]
* **Styling**: Tailwind CSS for responsive layouts

## Usage

* Navigate to `/` for Home page showing list of items.
* Click on an item to go to `/details/:id` for detailed view.
* Use the search bar to filter items by keyword.
* Pagination controls at bottom to navigate pages.

## Environment Variables

Copy `.env.example` to `.env` and set:

```ini
VITE_API_URL=https://api.example.com/items
```

## Deployment

Deployed URL: [https://your-deployment-url.com](https://your-deployment-url.com)

## Submission

* Push all code to GitHub Classroom repo
* Ensure `README.md` contains setup, usage, and deployment URL
* Include screenshots of Home and Details pages in `README.md`
* Deployed on Vercel, Netlify, or GitHub Pages

````

---

## Tailwind & Vite Configuration

1. **Initialize Vite + React**
   ```bash
   npm create vite@latest . -- --template react
````

2. **Install Tailwind**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure `tailwind.config.cjs`**

   ```js
   module.exports = {
     content: ['./index.html', './src/**/*.{js,jsx}'],
     theme: { extend: {} },
     plugins: [],
   }
   ```

4. **Include Tailwind in `index.css`**

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
