const express = require('express');
const recipe = require('./recipes.json'); // Assuming recipe.json is in the same directory

const app = express();
app.use(express.json());

// GET request to retrieve recipe.json
app.get('/api/items', (req, res) => {
  res.json(recipe[0]); // Send recipe.json as JSON response
});

// POST request to add new item (just like before)
app.post('/api/items', (req, res) => {
  const newItem = req.body; // Data sent in the request body
  res.send(`item is added: ${newItem.name}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
