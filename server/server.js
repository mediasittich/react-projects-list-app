const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const projectRoutes = require('./routes/projects');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app!'})
});

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));