import express from 'express';

const app = express();
const port = process.env.NODE_PORT || 4400;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
