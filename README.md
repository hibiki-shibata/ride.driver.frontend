
# Ride App Frontend
Website URL: https://hibiki-shibata.github.io/ride.driver.frontend/consumer/home

A backend service for a Ride app, built with React, TypeScript, and Vite. It provides a user-friendly interface for customers to book rides, view ride history, and manage their profiles.

## Features
### [Live Demo Video](https://drive.google.com/file/d/1ko3GkkVkxu2W7JOJMOL2H4MTNhOH539g/view?usp=drive_link)
- Consumer
  - Sign up, log in and log out
  - See Merchant list
  - See Menu list
  - Send Order
  - Order History
  - Manage profile information
- Courier
  - *Sign up, log in and log out
  - *Go online/offline
  - *See assigned tasks
  - *Update task status(Accept, PU, DO, Complete)
  - *Update location
  - *See task history
  - *Manage profile information
- Merchant
  - *Sign up, log in and log out
  - *See incoming orders
  - *Update order status(Mark as ready)
  - *See order history
  - *Manage menu items
  - *Manage store information

*Unit tests, component tests, and end-to-end tests are unimplemented yet

* = Under development

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