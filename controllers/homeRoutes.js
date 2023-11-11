const router = require('express').Router();
const { User, Monster } = require('../models');
const withAuth = require('../utils/auth');

router.get('/monsters', async (req, res) => {
  try {
    const monsterData = await Monster.findAll({
      order: [['level', 'ASC']]
    });
    const monsters = monsterData.map((monster) => monster.get({ plain: true }));

    res.render('monster', {
      monsters,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', async (req, res) => {
  res.render('login');
});

module.exports = router;