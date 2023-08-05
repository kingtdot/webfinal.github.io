document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert('Registered Successfully');
      // Here you can add the code to send the form data via email or to a server.
    }
  });

  function validateForm() {
    // Add your form validation logic here.
    // For simplicity, let's assume all fields are required.
    const formElements = document.querySelectorAll('#contactForm [required]');
    let isValid = true;
    formElements.forEach(function (element) {
      if (element.value.trim() === '') {
        isValid = false;
        element.classList.add('error');
      } else {
        element.classList.remove('error');
      }
    });
    return isValid;
  }