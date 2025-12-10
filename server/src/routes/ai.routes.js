let express = require("express");
const aiController = require("../controllers/aiController");

const router = express.Router();

// Handle POST on both /get-review and root (since it may be mounted at different paths)
router.post("/get-review", aiController.getReview);
router.post("/", aiController.getReview);

module.exports = router;
