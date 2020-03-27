const express = require("express");
const app = express();

//  Routes
const articlesRoutes = require('./api/routes/articles')
const researchersRoutes = require('./api/routes/researchers')
app.use('/api/articles', articlesRoutes)
app.use('/api/researchers', researchersRoutes)


app.get("/api/", (req, res) => res.send("API Endpoint is live!"));

//  Serving the Static Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));