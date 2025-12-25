let express = require("express");
const aiController = require("../controllers/aiController");

const router = express.Router();

// Handle POST and GET on both /get-review and root (since it may be mounted at different paths)
router.post("/", aiController.getReview);
router.get("/", aiController.getReview);
router.post("/get-review", aiController.getReview);
router.get("/get-review", aiController.getReview);

module.exports = router;
