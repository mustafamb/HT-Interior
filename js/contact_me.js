function sendEmail(){
    Email.send({
      SecureToken : "536a9f47-2194-48b9-a901-2a603fe4d70b",
        To : 'htinteriors97@gmail.com',
        From : 'htinteriors97@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );  
}