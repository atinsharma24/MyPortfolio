const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like CSS, JS)
app.use(express.static('public'));

// Endpoint to get images
app.get('/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'public/images'); // Adjust path as needed
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
