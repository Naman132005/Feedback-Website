// script.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
  
    // Simple form validation
    if (name && email && rating && comments) {
      // Display success message
      document.getElementById('successMessage').classList.remove('hidden');
  
      // Clear form fields
      document.getElementById('feedbackForm').reset();
  
      // Optional: Log the feedback (you can send it to a backend server here)
      console.log({
        name: name,
        email: email,
        rating: rating,
        comments: comments
      });
    }
  });