


function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  const serviceID = "service_5mrv337";
  const templateID = "template_8t4i95t";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));
}