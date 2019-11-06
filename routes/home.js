const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log(req.ip);

    res.render('index', {
        title: 'Главная страница',
        ip: req.ip,
        isHome: true
    })
});

module.exports = router;