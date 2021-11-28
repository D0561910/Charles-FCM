// Christmas01.ejs
const express = require("express");
const router = express.Router();

const pageLibrary = [
  { pageId: 0, pagePath: "Christmas01", thisYear: new Date().getFullYear() },
  { pageId: 1, pagePath: "santa-clau", thisYear: new Date().getFullYear() },
  { pageId: 2, pagePath: "Xmas-snow", thisYear: new Date().getFullYear() },
  {
    pageId: 3,
    pagePath: "Christmas-cracker",
    thisYear: new Date().getFullYear(),
  },
  { pageId: 4, pagePath: "Crystal-ball", thisYear: new Date().getFullYear() },
  {
    pageId: 5,
    pagePath: "newyear-animation",
    thisYear: new Date().getFullYear(),
  },
  {
    pageId: 6,
    pagePath: "Crystal-ball-animation",
    thisYear: new Date().getFullYear(),
  },
  {
    pageId: 7,
    pagePath: "pet-inside-gift",
    thisYear: new Date().getFullYear(),
  },
  { pageId: 8, pagePath: "Christmas-tree", thisYear: new Date().getFullYear() },
  { pageId: 9, pagePath: "Santa-reindeer", thisYear: new Date().getFullYear() },
  { pageId: 10, pagePath: "Christmas-snow", thisYear: new Date().getFullYear() },
];

/* GET Christmas page. */
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const lib = pageLibrary[id];

  if (lib) {
    res.render(`./Christmas/${lib.pagePath}`, { year: lib.thisYear });
  } else {
    res.render("./Christmas/christmas404");
  }
});

module.exports = router;
