const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import routes
const aiRoutes = require("../src/routes/ai.routes");

// Initialize Express app
const app = express();

// CORS configuration - allow all origins in production for Vercel
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes - support both /ai and /get-review paths for flexibility
app.use("/api", aiRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

// Start server only if not in production
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(
      `🔑 Gemini API Key: ${
        process.env.GOOGLE_GEMINI_KEY ? "✓ Configured" : "✗ Missing"
      }`
    );
  });
}

module.exports = app;
