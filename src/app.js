const express = require("express");
const cors = require('cors');
const app = express();
 
app.use(express.json());
app.use(cors());
 
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.status(400).json({ status: 400, message: err.message }); // Bad request
  }
  next();
});
 
app.post('/signin', (req, res) => {
  try {
    const { email, password, keepLoggedIn } = req.body;
    if (email && password) {
      res.json({
        email,
        keepLoggedIn,
        status: 200,
      });
    } else {
      res.status(400).json({ message: 'Invalid data' });
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error occurred while processing the request' });
  }
});
 
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
