const express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app api!'})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));