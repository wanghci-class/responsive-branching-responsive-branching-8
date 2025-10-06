document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', ev => {
    ev.preventDefault();

    const body = document.body;

    if (link.id === 'dark-mode') {
      body.classList.add('dark');
      body.classList.remove('light');
    } else if (link.id === 'light-mode') {
      body.classList.add('light');
      body.classList.remove('dark');
    } else if (link.id === 'os-default') {
      body.classList.remove('dark', 'light');
    }
  });
});
