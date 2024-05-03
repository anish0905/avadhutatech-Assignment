const express = require("express");
const { encodeURL, decodeURL } = require("../controllers/urlShorterController");

const router = express.Router();


router.post("/shorten", encodeURL);   
 //http://localhost:5002/api/shortener/shorten try this api for Post the datas
//{ "longURL": "https://example.com/vinay@avadhutatech.com"}  // try this json Body


router.get("/:shortCode", decodeURL); 
 //http://localhost:5002/api/shortener/b  try this api for get the ta

module.exports = router;
