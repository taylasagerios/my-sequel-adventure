const charIds = document.querySelectorAll('.choice-btn');

console.log(charIds);
charIds.forEach(btn => {
  btn.addEventListener('click', async (event) =>  {
    event.preventDefault();
    const button = event.target;
    console.log(event);
    console.log(button);
    const id = button.getAttribute('data-id');
    console.log(`data-id: ${id}`);
    await fetch('/api/user/character', {
      method: 'POST',
      body: JSON.stringify({
        chosenChar: id
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});