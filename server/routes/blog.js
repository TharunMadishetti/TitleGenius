const { addBlog , getMyBlogs } = require("../controllers/blogController");
const router = require("express").Router();

router.post("/addList/", addBlog);
router.post("/getMyLists/", getMyBlogs);
module.exports = router;