document.addEventListener('DOMContentLoaded', function() {
    const emailList = document.getElementById('email-list');
  
    // Obtener los emails enviados del localStorage
    const emailsEnviados = JSON.parse(localStorage.getItem('emails')) || [];
  
    // Renderizar los emails enviados
    emailsEnviados.forEach(email => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="email">${email.to}</span>: 
        <span class="subject">${email.subject}</span> - 
        <span>${email.body}</span>
      `;
      emailList.appendChild(listItem);
    });
  });
  