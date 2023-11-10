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
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

