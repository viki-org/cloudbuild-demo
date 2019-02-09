'use strict'

// Dependencies
const express = require('express')
const router = express.Router()
const path = require('path')

// Controller imports
const homeController = require(path.resolve('server-assets/controllers/home-controller.js'))
const catController = require(path.resolve('server-assets/controllers/cats-controller.js'))

router.get('/', homeController.show)
router.get('/cats', catController.index)
router.get('/cats/:id', catController.show)

module.exports = router