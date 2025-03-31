const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Basic GET API
app.get("/devapi/testdata", (_req, res) => {
    const filePath = path.join(__dirname, "catslog.json");

    // Read JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err); // Log error details
            return res.status(500).json({ error: "Error reading JSON file" });
        }

        // Parse JSON and send response
        try {
            res.json(JSON.parse(data));
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            res.status(500).json({ error: "Invalid JSON format" });
        }
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}).on("error", (err) => {
    console.error("Server Error:", err); // Log server errors
});

// adding lines to check git config
// onther lines for config check
// onther onther lines for config check 2