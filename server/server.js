const express = require('express'),
    app = express();

const projectRoutes = require('./routes/projects');

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app api!'})
});

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));