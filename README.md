Website: https://hibiki-shibata.github.io/ride.driver.frontend/consumer/home

# Ride App Frontend

A backend service for a Ride app, built with React, TypeScript, and Vite. It provides a user-friendly interface for customers to book rides, view ride history, and manage their profiles.

## Features
- Consumer
  - Sign up and log in
  - See Merchant list
  - See Menu list
  - Send Order
  - Order History
- Courier
  - Under development
- Merchant
  - Under development

## Tech Stack
- React
- TypeScript
- Vite
- Vitest
- Playwright

## Architecture
This project uses a feature-based folder structure. Server state is handled with React Query, while local UI state is managed with React hooks. API requests are isolated in feature-level `api/` modules.

## Testing
Unit and component tests are written with Vitest and React Testing Library. End-to-end flows are tested with Playwright.

## Quick Started

```bash
npm install
npm run dev