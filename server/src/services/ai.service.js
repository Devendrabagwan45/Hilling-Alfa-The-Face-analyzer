const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini AI
const apiKey = process.env.GOOGLE_GEMINI_KEY;
if (!apiKey) {
  console.error("❌ GOOGLE_GEMINI_KEY environment variable is not set");
}

const ai = new GoogleGenerativeAI(apiKey);
const model = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `You are a face analyst AI specialized in reviewing and providing feedback on face conditions in images. Your task is to analyze images of human faces and provide detailed assessments regarding skin health, facial features, and any visible conditions like acne, dark spots, pigmentation, etc.

Role & Responsibilities:
- Analyze facial skin for health indicators
- Identify visible conditions and provide recommendations
- Give detailed, helpful feedback in a structured format
`,
});

async function analyzeImage(base64Image) {
  const imagePart = {
    inlineData: {
      data: base64Image,
      mimeType: "image/jpeg",
    },
  };

  const prompt =
    "Analyze this face image and provide detailed feedback on skin health, visible conditions, and recommendations.";

  const result = await model.generateContent([prompt, imagePart]);
  return result.response.text();
}

module.exports = analyzeImage;
