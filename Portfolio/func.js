
  const btn = document.getElementById("icon_button");
  const link = document.getElementById("real_links");

  btn.addEventListener("click", function() {
    if (link.style.display === "none" || link.style.display === "") {
      link.style.display = "flex";
    } else {
      link.style.display = "none";
    }
  });


  function validateForm() {
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const number = document.getElementById("Number").value.trim();

    // Simple Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{11}$/.test(number)) {
      alert("Please enter a valid 11-digit contact number.");
      return;
    }

    alert("Form submitted successfully!");
    // Optionally, you can clear the form after success:
    // document.getElementById("Contact").reset();
  }