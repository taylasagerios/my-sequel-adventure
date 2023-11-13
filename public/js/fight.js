
  //fight button

  document.getElementById('fight-button').addEventListener('click', function() {
    console.log("clicked");
    checkLoginStatus().then(isLoggedIn => {
      if (isLoggedIn) {
        // If the user is logged in, redirect to the fight page
        window.location.href = '/';
      } else {
        // If the user is not logged in, redirect to the login page
        window.location.href = '/login';
      }
    });
  });

   async function checkLoginStatus() {
    try {
      const response = await fetch('/api/home/monsters');
      const data = await response.json();
      return data.loggedIn;
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  }