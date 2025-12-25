const analyzeImage = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const image = req.body.code || req.query.code;
  if (!image) {
    console.error("No image provided in request");
    return res.status(400).json({ error: "Image is required" });
  }
  try {
    console.log("Processing image analysis...");
    const response = await analyzeImage(image);
    res.status(200).json({ success: true, analysis: response });
  } catch (error) {
    console.error("Controller Error:", error.message);
    res
      .status(500)
      .json({ error: "Error generating review: " + error.message });
  }
};
