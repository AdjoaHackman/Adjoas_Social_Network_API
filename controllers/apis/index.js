const { Router } = require('express');

const userRoutes = require('./user');

const apiRouter = new Router();

apiRouter.use('/user', userRoutes);

module.exports = apiRouter;