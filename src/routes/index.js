const router = require('express').Router()
const controller = require('../controllers')
module.exports = (app) => {
    router.get('/', controller)
    return router
}