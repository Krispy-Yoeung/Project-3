const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Sucessfully Signed In"
  });
});


module.exports = router;
