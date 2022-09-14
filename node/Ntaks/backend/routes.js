const express= require('express');

const router = express.Router();


const SessionController = require('./src/controllers/SessionController');

router.post("/sessions", SessionController.store);



module.exports = app => app.use(router);