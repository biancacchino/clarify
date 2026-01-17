import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from './middleware/cors';
import { explainRouter } from './routes/explain';
import { chatRouter } from './routes/chat';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Health check endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'FormBridge API is running',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/explain', explainRouter);
app.use('/chat', chatRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  /         - Health check');
  console.log('  POST /explain  - Get explanation for a form question');
  console.log('  POST /chat     - Chat about a form question');
});

export { app };
