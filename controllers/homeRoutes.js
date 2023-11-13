const router = require('express').Router();
const { User, Monster, Character } = require('../models');
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

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/characters', withAuth, async (req, res) => {
  console.log(req.session.userId);
  const characterData = await Character.findAll({
    where:  {
      user_id: req.session.userId
    },
    order: [['name', 'ASC']]
  },
  );
  const characters = characterData.map((character) => character.get({ plain: true }));
  console.log(characters);
  res.render('character-select',{characters: characters, username: req.session.username, loggedIn: req.session.loggedIn});
});

module.exports = router;