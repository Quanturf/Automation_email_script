// <script>
  const formData = new FormData();
  formData.append("User ID", "{{id}}");
  formData.append("Name", "{{full_name}}");
  formData.append("Email", "{{email}}");
  formData.append("Signup Date", new Date().toLocaleString());
  
  fetch("https://formspree.io/f/mqaprooe", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => console.log("Notification email sent"))
  .catch(error => console.error("Error sending notification:", error));
// </script>
