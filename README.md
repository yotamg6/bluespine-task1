# Bluespine Task 1

A React application for displaying and managing data in interactive tables with detailed views.

## Features

- Data grid view with pagination
- Multiple data set support (Commodity and Employee data)
- Detailed view for selected rows

## Tech Stack

- React
- TypeScript
- Material-UI (MUI)
- MUI X-Data-Grid Premium

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── AppShell.tsx   # Main application layout
  │   ├── Table.tsx      # Reusable data grid component
  │   ├── DetailsBox.tsx # Detailed view component
  │   └── ...
  ├── hooks/             # Custom React hooks
  │   └── useTableData.tsx
  ├── utils/             # Utility functions and constants
  │   ├── utils.ts
  │   ├── constants.ts
  │   └── mappers.tsx
  ├── types/             # TypeScript type definitions
  └── tests/             # Test files
      ├── components/
      ├── hooks/
      └── __mocks__/
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```