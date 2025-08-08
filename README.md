# BSKY Tracker Website

A React-based web application for tracking Bluesky data.

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Setup
1. Install dependencies:
   ```bash
   yarn install
   ```

2. Set up environment variables:
   Create a `.env` file in the `frontend` directory with:
   ```
   REACT_APP_BACKEND_URL=http://localhost:3001
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

The application will be available at `http://localhost:3000`.

## Deployment on Vercel

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project structure and use the configuration in `vercel.json`
3. Set the following environment variables in your Vercel project settings:
   - `REACT_APP_BACKEND_URL`: Your backend API URL (e.g., `https://your-backend-domain.com`)

### Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from the project root:
   ```bash
   vercel
   ```

3. Follow the prompts and set your environment variables when asked.

## Project Structure
- `frontend/` - React application (Create React App with CRACO)
- `vercel.json` - Vercel deployment configuration
- `package.json` - Root package configuration with workspaces

## Build Process
The project uses CRACO (Create React App Configuration Override) for enhanced webpack configuration and uses Yarn as the package manager.
