let url = 'https://api.twitter.com/1.1/statuses/update.json';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Произошла ошибка ${response.status}.`);
    }
  })
  .catch(error => {
    console.log('Произошла ошибка при выполнении запроса:', error.message);
  });
