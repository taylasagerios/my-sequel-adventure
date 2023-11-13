const monsIds = document.querySelectorAll('.choice-btn');

console.log(monsIds);
monsIds.forEach(btn => {
  btn.addEventListener('click', async (event) =>  {
    event.preventDefault();
    const button = event.target;
    console.log(event);
    console.log(button);
    const id = button.getAttribute('data-id');
    console.log(`data-id: ${id}`);
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