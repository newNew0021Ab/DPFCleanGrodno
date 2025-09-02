# Overview

This is a full-stack web application for "ЭкоДизель-Сервис" (EcoDiesel Service), a DPF (Diesel Particulate Filter) cleaning service business in Grodno, Belarus. The application serves as a professional service website offering DPF cleaning, diagnostics, and related services for diesel vehicles. It features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Custom component system built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with dedicated routes for contact forms, quote requests, blog posts, and testimonials
- **Validation**: Zod schemas for request/response validation shared between frontend and backend
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL with connection pooling via Neon Database serverless driver
- **ORM**: Drizzle ORM for type-safe database queries and migrations
- **Schema Management**: Centralized schema definitions in shared directory with automatic TypeScript types
- **Development Storage**: In-memory storage implementation for development/testing with seeded data
- **Migration System**: Drizzle Kit for database schema migrations and version control

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Management**: Basic user authentication system with username/password
- **Request Tracking**: Custom middleware for API request logging and response time monitoring

## External Dependencies
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Analytics**: Google Analytics 4 integration with custom event tracking
- **Email Services**: Placeholder implementation for email notifications (requires external SMTP service)
- **UI Libraries**: 
  - Radix UI for accessible component primitives
  - Lucide React for consistent iconography
  - Embla Carousel for image galleries
- **Development Tools**:
  - Replit integration with development banner and cartographer plugin
  - Runtime error overlay for development debugging
  - Hot module replacement via Vite development server

The application uses a monorepo structure with shared TypeScript types and schemas between client and server, ensuring type safety across the full stack. The architecture supports both development and production environments with environment-specific configurations and build processes.