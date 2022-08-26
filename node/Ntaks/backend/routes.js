const express= require('express');

const routes = express.Router();

routes.get('/',(req, res)=>{
    res.json({status: "Ntask API"});

});

require('./src/controllers/TasksControllers')(routes);

module.exports = app => app.use(routes);