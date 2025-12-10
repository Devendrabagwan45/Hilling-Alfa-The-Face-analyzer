const fs = require("fs");
const path = require("path");

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

class Logger {
  constructor() {
    this.logFile = path.join(logsDir, "analysis.log");
  }

  formatLog(level, message, data = {}) {
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      message,
      ...data,
    });
  }

  log(level, message, data = {}) {
    const logEntry = this.formatLog(level, message, data);
    console.log(logEntry);

    // Also write to file
    fs.appendFileSync(this.logFile, logEntry + "\n");
  }

  info(message, data = {}) {
    this.log("INFO", message, data);
  }

  warn(message, data = {}) {
    this.log("WARN", message, data);
  }

  error(message, data = {}) {
    this.log("ERROR", message, data);
  }

  analysis(message, data = {}) {
    this.log("ANALYSIS", message, { ...data, type: "analysis" });
  }
}

module.exports = new Logger();
