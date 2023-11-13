const router = require('express').Router();
const { User, Monster, Character } = require('../models');
const { withAuth, chosen } = require('../utils/auth');

router.get('/monsters', async (req, res) => {
  try {
    const monsterData = await Monster.findAll({
      order: [['id', 'ASC']]
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

router.get('/', withAuth, (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
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
  res.render('character-select',{characters: characters, username: req.session.username, userId: req.session.userId, loggedIn: req.session.loggedIn});
});

router.get('/battle', chosen,  async (req, res) => {
  const monData = await Monster.findByPk(req.session.chosenMon);
  const monster = monData.get({ plain: true });
  const charData = await Character.findByPk(req.session.chosenChar);
  const char = charData.get({ plain: true });
  console.log(monster);
  console.log(char); 
  res.render('battle', {monster: monster, character: char, loggedIn: req.session.loggedIn});
});

module.exports = router;