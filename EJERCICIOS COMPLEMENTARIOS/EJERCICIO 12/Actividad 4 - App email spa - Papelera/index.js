        // Sample array of sent emails
        let sentEmails = [
            { id: 1, subject: "Hello", body: "Sample email body 1", recipient: "example@example.com" },
            { id: 2, subject: "Meeting", body: "Sample email body 2", recipient: "test@test.com" }
        ];

        // Function to render sent emails
        function renderSentEmails() {
            const sentEmailsContainer = document.getElementById('sentEmails');
            sentEmailsContainer.innerHTML = '';

            sentEmails.forEach(email => {
                const emailDiv = document.createElement('div');
                emailDiv.innerHTML = `
                    <p>Subject: ${email.subject}</p>
                    <p>To: ${email.recipient}</p>
                    <button onclick="moveToTrash(${email.id})">Move to Trash</button>
                `;
                sentEmailsContainer.appendChild(emailDiv);
            });
        }

        // Function to move an email to trash
        function moveToTrash(emailId) {
            const emailIndex = sentEmails.findIndex(email => email.id === emailId);
            if (emailIndex !== -1) {
                const deletedEmail = sentEmails.splice(emailIndex, 1)[0];

                // Move deleted email to trash (you can send this to server as well)
                trashEmails.push(deletedEmail);
                renderTrashEmails();

                // Make AJAX DELETE request to JSONPlaceholder API
                fetch(`https://jsonplaceholder.typicode.com/posts/${emailId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        console.log(`Email with ID ${emailId} deleted successfully.`);
                    } else {
                        console.error(`Failed to delete email with ID ${emailId}.`);
                    }
                })
                .catch(error => console.error(error));

                renderSentEmails();
            }
        }

        // Sample array of emails in trash
        let trashEmails = [];

        // Function to render emails in trash
        function renderTrashEmails() {
            const trashEmailsContainer = document.getElementById('trashEmails');
            trashEmailsContainer.innerHTML = '';

            trashEmails.forEach(email => {
                const emailDiv = document.createElement('div');
                emailDiv.innerHTML = `
                    <p>Subject: ${email.subject}</p>
                    <p>To: ${email.recipient}</p>
                `;
                trashEmailsContainer.appendChild(emailDiv);
            });
        }

        // Initial rendering
        renderSentEmails();
        renderTrashEmails();

















