function saveData(phase) {
  const form = document.querySelector(`.${phase}-form`);
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Replace the URL with your server endpoint for saving data
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    alert(`Data saved for ${phase}`);
    form.reset();
  })
  .catch(error => {
    console.error('Error saving data:', error);
  });
}
