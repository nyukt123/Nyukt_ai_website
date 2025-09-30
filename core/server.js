// // server.js
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Log environment variables on startup
// console.log('Starting server with environment variables:');
// console.log(`- PORT: ${PORT}`);
// console.log(`- NODE_ENV: ${process.env.NODE_ENV || 'development'}`);

// // Serve static files from the React build
// const staticPath = path.join(__dirname, 'dist');
// console.log('Serving static files from:', staticPath);
// app.use(express.static(staticPath));

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
// });

// // Catch-all to serve React app for client-side routing
// app.get('*', (req, res) => {
//   const indexPath = path.join(staticPath, 'index.html');
//   res.sendFile(indexPath, (err) => {
//     if (err) {
//       console.error('Error serving index.html:', err);
//       res.status(500).send('Internal Server Error');
//     }
//   });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('Unhandled error:', err);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// // Start server
// const server = app.listen(PORT, '0.0.0.0', () => {
//   console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
// });

// // Graceful shutdown
// const shutdown = () => {
//   console.log('Shutdown signal received. Closing server...');
//   server.close(() => {
//     console.log('Server closed. Exiting process.');
//     process.exit(0);
//   });
// };

// process.on('SIGTERM', shutdown);
// process.on('SIGINT', shutdown);

// // Catch uncaught exceptions and unhandled promise rejections
// process.on('uncaughtException', (err) => {
//   console.error('Uncaught Exception:', err);
//   process.exit(1);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
//   process.exit(1);
// });

// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Log environment variables on startup
console.log('✅ Starting server with environment variables:');
console.log(`- PORT: ${port}`);
console.log(`- NODE_ENV: ${process.env.NODE_ENV || 'development'}`);

// Path to React build
const staticPath = path.join(__dirname, 'dist');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Fallback route for React Router (must be after all other routes)
app.get('*', (req, res) => {
  const indexFile = path.join(staticPath, 'index.html');
  console.log(`Serving index.html for route: ${req.originalUrl}`);
  res.sendFile(indexFile);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('⚠️ Error occurred:', err.stack || err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
