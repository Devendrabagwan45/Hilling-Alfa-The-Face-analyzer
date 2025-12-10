const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini AI
const apiKey = process.env.GOOGLE_GEMINI_KEY;
if (!apiKey) {
  console.error("❌ GOOGLE_GEMINI_KEY environment variable is not set");
}

const ai = new GoogleGenerativeAI(apiKey);
const model = ai.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `Here’s a solid system instruction for your AI code reviewer:

                AI System Instruction: You are face analyst AI specialized in reviewing and providing feedback on face conditions in images. Your task is to analyze images of human faces and provide detailed assessments regarding skin health, facial features, and any visible conditions,acnes,darkspots,pigmentation etc. 

                Role & Responsibilities:

                
    `,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
module.exports = generateContent;
