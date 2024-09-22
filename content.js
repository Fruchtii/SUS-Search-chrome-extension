// Wait for Google search results to load
setTimeout(() => {
  const results = document.querySelectorAll('.g'); // Select search result elements

  results.forEach(result => {
    const title = result.querySelector('h3'); 
    if (title && Math.random() < 0.3) { // Randomly add 'sus' (30% chance)
      title.textContent += ' sus';
    }
  });
}, 1000); // Delay to ensure results are loaded
