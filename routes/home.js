const {Router} = require('express')
// Controller
const {getHome} = require('../controller/home')


const router = Router()

router.get('/', getHome)


module.exports = router;