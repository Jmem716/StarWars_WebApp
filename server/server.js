const PORT = process.env.PORT || 8000;
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server Running...');
});

// Your other route definitions

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
