const monsIds = document.querySelectorAll('.choice-btn');

monsIds.forEach(btn => {
  btn.addEventListener('click', async (event) =>  {
    event.preventDefault();
    const button = event.target;
    const id = button.getAttribute('data-id');
    await fetch('/api/user/monster', {
      method: 'POST',
      body: JSON.stringify({
        chosenMon: id
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    document.location.replace('/battle');
  });
});