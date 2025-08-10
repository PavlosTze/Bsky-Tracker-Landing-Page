# Tracker - Manager for Bluesky

A React-based landing page for the [Tracker - Manager for Bluesky](https://blueskyapp.app/) mobile app.

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Setup
1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn start
   ```

The application will be available at `http://localhost:3000`.

## Deployment on Vercel

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project structure and use the configuration in `vercel.json`
3. No environment variables are required - this is a static landing page

### Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from the project root:
   ```bash
   vercel
   ```

3. Follow the prompts - no environment variables needed.

## Project Structure
- `frontend/` - React application (Create React App with CRACO)
- `vercel.json` - Vercel deployment configuration
- `package.json` - Root package configuration with workspaces

## Build Process
The project uses CRACO (Create React App Configuration Override) for enhanced webpack configuration and uses Yarn as the package manager.

## About the App
This is a landing page for [Tracker - Manager for Bluesky](https://blueskyapp.app/), a mobile app available on:
- [Google Play Store](https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer)
- [Apple App Store](https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282)
- [Bluesky Profile](https://bsky.app/profile/blueskytracker.app)
