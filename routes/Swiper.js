// Christmas01.ejs
const express = require("express");
const router = express.Router();

const pageLibrary = [{ pageId: 0, pagePath: "example" }];

/* GET Christmas page. */
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const lib = pageLibrary[id];

  console.log({ lib });

  if (lib) {
    res.render(`./Swiper/${lib.pagePath}`);
  } else {
    res.render("./Christmas/christmas404");
  }
});

module.exports = router;
