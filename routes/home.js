const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log(req.ip);

    res.render('index', {
        title: 'Главная страница',
        ip: req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.ip,
        isHome: true
    })
});

module.exports = router;