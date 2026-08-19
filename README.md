# Property Pulse

A full-stack property discovery and listing application built with Next.js. Property Pulse lets users browse property listings, manage their own listings and profile, work with location-aware property data, upload images, and use authenticated application features.

## Why I built it

I built Property Pulse to explore a production-style Next.js application beyond a simple frontend demo. The project brings together authentication, database-backed application data, image management, maps/geocoding, API routes, and responsive UI in one codebase.

## Tech stack

- **Next.js 14** and **React 18**
- **MongoDB** with **Mongoose**
- **NextAuth** for authentication
- **Tailwind CSS** for styling
- **Cloudinary** for image handling
- **Mapbox / React Map GL** for location and map features
- Next.js App Router and API routes

## Application areas

The application includes dedicated areas for:

- Property browsing and property detail workflows
- User profiles and listing management
- Authenticated application features
- User messages
- API-backed application behavior
- Loading and not-found states

## Engineering focus

This project gave me hands-on experience building a full-stack application within the Next.js ecosystem, including server-backed data, authentication, third-party services, routing, reusable React UI, and application-level state and user flows.

## Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

The application uses external services including MongoDB, authentication, Cloudinary, and Mapbox. Create a local environment file with the credentials required by the application. Do not commit secrets to source control.

### 3. Start the development server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## About this repository

Property Pulse is one of my portfolio projects demonstrating full-stack JavaScript development. My professional work is primarily on private production codebases, so this repository is intended to show the same kind of end-to-end thinking—UI, application flows, APIs, data, authentication, and integrations—in a public project.
