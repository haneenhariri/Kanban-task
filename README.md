# Kanban Task Board

A modern, responsive Kanban task management application built with React, TypeScript, and Tailwind CSS. Features drag-and-drop functionality, dark/light mode, and mobile-optimized design.

## Features

-  **Drag & Drop**: Intuitive task and column management
- **Dark/Light Mode**: Automatic theme switching with user preference persistence
- **Responsive Design**: Optimized for both desktop and mobile devices
-  **Local Storage**: Automatic data persistence
-  **Fast Performance**: Built with Vite for lightning-fast development
-  **Modern UI**: Clean design with smooth animations

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Drag & Drop**: @hello-pangea/dnd
- **Build Tool**: Vite

##  Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18.18.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Kanban-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.


##  Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Board/          # Drag & drop board components
│   ├── Column/         # Column-related components
│   ├── Task/           # Task-related components
│   ├── providers/      # Context providers
│   └── ui/             # Basic UI components
├── pages/              # Page components
├── redux/              # Redux store and slices
├── types/              # TypeScript types and constants
├── utils/              # Utility functions
└── assets/             # Static assets
```

##  Usage

1. **Add Columns**: Click "Add new column" to create task categories
2. **Add Tasks**: Click "Add new task" within any column
3. **Drag & Drop**: Move tasks between columns or reorder them
4. **Edit Tasks**: Click on any task to expand and edit
4. **Delete Tasks**: Click on any task to expand and delete
5. **Theme Toggle**: Use the theme switcher in the header
6. **Mobile**: Swipe and tap on mobile devices

## Development

### Architecture

- **Single Responsibility Principle**: Each component has one clear purpose
- **Component Composition**: Reusable, composable components
- **Type Safety**: Full TypeScript coverage
- **Performance**: Memoized components and optimized renders

