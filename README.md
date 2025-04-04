# Fetch Web App

## Overview
Fetch Web App is a simple Express.js-based web application that fetches and displays random quotes and dog images using external APIs. 
It provides both a web-based interface and API endpoints for retrieving content.

## Features
- Fetch and display random quotes.
- Fetch and display random dog images.
- API endpoints to retrieve quotes and images.
- Simple Express.js server with EJS for templating.

## Installation
### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Jwe891116/fetchAssignment.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Open the application in a browser:
   ```sh
   http://localhost:3002/
   ```

## Project Structure
```
fetch-web-app/
├── config/
│   ├── constants.js      # API keys and URLs
│
├── controllers/
│   ├── userController.js # Handles API responses and page rendering
│
├── models/
│   ├── userModel.js      # Fetches data from external APIs
│
├── routes/
│   ├── fetchRoutes.js    # Defines application routes
│
├── views/
│   ├── index.ejs         # Web page template
│
├── public/
│   ├── styles.css        # Static assets
│
├── app.js                # Main Express.js application
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
```

## API Endpoints
- `GET /api/quote` - Returns a random quote.
- `GET /api/dog-image` - Returns a random dog image.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- Fetch API
- API Ninjas (Quotes API)
- The Dog API

## Author
Joshua Emmanuel

