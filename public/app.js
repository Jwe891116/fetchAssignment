// public/app.js
document.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.getElementById('refresh-btn');
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const dogImage = document.querySelector('.dog-image');
  
    refreshBtn.addEventListener('click', async () => {
      try {
        // Disable button during fetch to prevent spamming
        refreshBtn.disabled = true;
        refreshBtn.textContent = 'Loading...';
  
        // Fetch both quote and dog image in parallel
        const [quoteResponse, dogResponse] = await Promise.all([
          fetch('/api/quote'),
          fetch('/api/dog-image')
        ]);
  
        if (!quoteResponse.ok || !dogResponse.ok) {
          throw new Error('Failed to fetch content');
        }
  
        const [quoteData, dogData] = await Promise.all([
          quoteResponse.json(),
          dogResponse.json()
        ]);
  
        // Update the DOM
        if (quoteData) {
          quoteText.textContent = quoteData.quote || '';
          quoteAuthor.textContent = quoteData.author ? `--- ${quoteData.author}` : '';
        }
  
        if (dogData && dogData.url) {
          dogImage.src = dogData.url;
          dogImage.alt = 'Random dog';
        }
      } catch (error) {
        console.error('Error:', error);
        quoteText.textContent = 'Failed to load quote. Please try again.';
        quoteAuthor.textContent = '';
      } finally {
        refreshBtn.disabled = false;
        refreshBtn.textContent = 'Get New Content';
      }
    });
  });