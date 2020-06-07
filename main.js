'use strict';

(function() {
  const cookies = document.cookie;
  let counter = 0;
  if (cookies) {
    const matches = cookies.match(/counter=(\d+)/);
    if (matches && matches.length > 1) {
      counter = parseInt(matches[1], 10);
    }
  }
  document.getElementById('counter').innerText = counter.toString();
  document.cookie = `counter=${counter+1}`
})();
