// Function to show the form after 5 seconds
setTimeout(() => {
  document.getElementById('birthday-image').classList.add('hidden');
  document.getElementById('message-form').classList.remove('hidden');
}, 5000);

// Function to handle form submission
function submitMessage() {
  const message = document.getElementById('message').value;

  if (message.trim() === "") {
    alert("Please write a message before submitting.");
    return;
  }

  // Hide the form and show the thank you message
  document.getElementById('message-form').classList.add('hidden');
  document.getElementById('thank-you-message').classList.remove('hidden');
}
