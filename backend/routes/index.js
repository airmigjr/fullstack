const router = require('express').Router();

const portifolio = require('./portifolio');

require('../db/mongoConnection');

router.get('/', (req, res) =>{
    res.json({
        success: false,
        message: 'Por favor, não chame /api, isso não é para o nosso servidor'
    })
})

router.use('/portifolio', portifolio);


module.exports = router;