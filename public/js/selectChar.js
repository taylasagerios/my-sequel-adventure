const charIds = document.querySelectorAll('.choice-btn');

console.log(charIds);
charIds.forEach(btn => {
  btn.addEventListener('click', async (event) =>  {
    event.preventDefault();
    const button = event.target;
    const id = button.getAttribute('data-id');
    const response = await fetch('/api/user/character', {
      method: 'POST',
      body: JSON.stringify({
        chosenChar: id
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if(response.ok) {
      document.location.replace('/monsters');
    }
  });
});

document.getElementById('new-char').addEventListener('click', async (event) => {
  event.preventDefault();
  const button = event.target;
  const name = document.getElementById('new-char-input').value.trim();
  const id = button.getAttribute('data-user');
  console.log(`name: ${name}`);
  console.log(`id: ${id}`);
  const response = await fetch('/api/character', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      user_id: id
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if(response.ok) {
    document.location.replace('/characters')
  }
})