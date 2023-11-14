const router = require('express').Router();
const { User } = require('../../models');

// Sign Up
router.post('/', async (req, res) => {
  try {
    // Create a new user based on the request data
    const newUser = await User.create(req.body);
    console.log(newUser);
      
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    // Find a user by their username
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    console.log(userData);
    const user = userData.get({plain: true});
    console.log(user);
    // Check the password provided against the stored hash
    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    // Save user information in the session and return a success message
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.status(200).json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Login failed!' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Destroy the session on logout
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(userData);
    if(!userData[0]){
      res.status(400).json({ message: 'No such user'});
    }
    else {
      res.status(200).json(userData[0]);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//adds chosen character to user session data
router.post('/character', (req, res) => {
  req.session.save(() => {
    req.session.chosenChar = req.body.chosenChar;
    res.status(200).json(req.session.chosenChar);
  });
});

//adds chosen monster to user session data
router.post('/monster', (req, res) => {
  req.session.save(() => {
    req.session.chosenMon = req.body.chosenMon;
    res.status(200).json(req.session.chosenMon);
  });
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedCount = await User.destroy({
      where: { id: userId },
    });
    if (deletedCount === 1) {
      res.status(200).json({ message: 'Character deleted successfully' });
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
