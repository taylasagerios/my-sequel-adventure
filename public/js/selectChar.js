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
    const user_id = button.getAttribute('data-user');
    console.log(`data-user: ${user_id}`);
    const response = await fetch(`/api/user/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        chosen: id
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  })
})