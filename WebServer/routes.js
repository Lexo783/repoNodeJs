const Router = require('express').Router
const router = Router()

router.use((req, res, next) => {
    console.log('route api called')
    next()
})

router.get('/api', (req, res) =>{
    res.send('Ok')
})

module.exports = router
