# React Movie Application

A modern React application for browsing and managing movies, built with TypeScript and Vite.

## 🌟 Features

- 🎬 Browse movies with a responsive grid layout
- 🔍 Search and filter functionality
- ⭐ Favorite movies management
- 🎥 Movie details with trailers
- 📱 Responsive design
- 🌓 Light/Dark theme support
- 🎬 YouTube video integration
- ♿ Accessibility features

### Known API Limitations

⚠️ Important: The TMDB API (https://api.themoviedb.org) has some limitations:

- No support for bulk movie fetching by IDs (you need to fetch movies one by one)
- Related discussion: [TMDB Talk #668043](https://www.themoviedb.org/talk/668043dd9d585b6d60afe723)
- Feature request tracking: [Trello Card](https://trello.com/c/lu5lFkB6/14-allow-querying-multiple-ids-at-once)

To work around these API limitations, our application implements:

1. Efficient local storage solution for favorites:

   - Complete movie data is stored in localStorage when a user marks a movie as favorite
   - Favorite movies are retrieved directly from localStorage instead of making additional API calls
   - This approach eliminates the need for multiple API requests when displaying favorite movies

2. Search implementation:
   - Only search functionality is implemented through the search endpoint
   - Filter options are disabled when search is active
   - Users need to clear search to use filters

## 🏗️ Architecture

The application follows a clean and modular architecture:

### Core Technologies

- React with TypeScript
- Vite as build tool
- React Query for data fetching
- React Router for navigation

### Project Structure

- `/src/api/` - API integration and hooks
- `/src/components/` - Reusable UI components
- `/src/hooks/` - Custom React hooks
- `/src/constants/` - Application constants
- `/src/helpers/` - Utility functions
- `/src/types/` - TypeScript type definitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- TMDB API Key (get it from [The Movie Database](https://www.themoviedb.org/))

### Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

## 🧪 Testing

The project includes comprehensive unit tests using Jest and React Testing Library.

To run tests:

```bash
npm test
# or
yarn test
```

Test files are located next to their corresponding components with the `.test.tsx` extension.

## 🔄 CI/CD

Includes GitHub Actions workflow for:

- TypeScript type checking
- ESLint validation
- Unit tests execution

## 📝 Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write meaningful component and function names

### Component Structure

- Maintain single responsibility principle
- Create reusable components
- Keep components small and focused
- Use proper type definitions

## 🎨 Theming

The application supports light and dark themes:

- Theme detection based on system preferences
- Manual theme toggle
- Persistent theme selection
- Custom theme variables in CSS

## 🔧 Configuration

### Environment Variables

Create a .env file in the root directory:

```
VITE_MOVIE_API_KEY=your_api_key
```

To get your TMDB API key:

1. Create an account at [The Movie Database](https://www.themoviedb.org/)
2. Go to your account settings
3. Request an API key for developer use
4. Copy the API key (v3 auth) and paste it as the value for `VITE_MOVIE_API_KEY`

### Build Configuration

- vite.config.ts - Vite configuration
- tsconfig.json - TypeScript configuration
- eslint.config.js - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Commit Guidelines

- Use conventional commits
- Include meaningful commit messages
- Reference issues in commits when applicable

### Pull Request Process

1. Update documentation if needed
2. Add/update tests as required
3. Ensure all tests pass
4. Request review from maintainers
