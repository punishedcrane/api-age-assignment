document.getElementById("ageForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 
  

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("result").textContent = "";
  
 
    let isValid = true;
  
    if (name === "") {
      document.getElementById("nameError").textContent = "Name cannot be empty.";
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (!isValid) return;
  
  
    try {
      const response = await fetch(`https://api.agify.io?name=${name}`);
      const data = await response.json();
  
      if (data.age) {
        document.getElementById("result").textContent = `The predicted age for ${name} is ${data.age}.`;
      } else {
        document.getElementById("result").textContent = "Unable to predict the age.";
      }
    } catch (error) {
      document.getElementById("result").textContent = "Error fetching data. Please try again.";
    }
  });
  