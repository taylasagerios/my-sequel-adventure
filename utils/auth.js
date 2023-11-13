const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, execute the route function that will allow them to view the page
    // We call next() if the user is authenticated
    next();
  }
};

const chosen = (req, res, next) => {
  if(!req.session.chosenMon) {
    res.redirect('/monsters');
  }
  else if(!req.session.chosenChar) {
    res.redirect('/characters');
  }
  else {
    next();
  }
}

module.exports = { withAuth, chosen };