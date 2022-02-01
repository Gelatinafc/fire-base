const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({origin: 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js' }))
app.use(cors({origin: 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js' }))