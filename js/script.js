// Get the elements
const requestButton = document.getElementById('request-button');
const waitingModal = document.getElementById('waiting-modal');
const responseModal = document.getElementById('response-modal');
const responseMessage = document.getElementById('response-message');
const fileUploadContainer = document.getElementById('file-upload-container');
const fileUpload = document.getElementById('file-upload');
const uploadButton = document.getElementById('upload-button');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');

// Add event listener to the request button
requestButton.addEventListener('click', () => {
    // Show the waiting modal
    waitingModal.style.display = 'block';

    // Send the request to the server ( simulate a 2-second delay)
    setTimeout(() => {
        // Get the form data
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('date', document.getElementById('date').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('number', document.getElementById('number').value);
        formData.append('time', document.getElementById('time').value);

        // Simulate a server response (replace with your actual server API)
        const response = {
            status: 'success', // or 'error'
            message: 'Mesa disponible' // or 'Mesa no disponible'
        };

        // Handle the response
        if (response.status === 'success') {
            // Show the response modal with the file upload container
            responseModal.style.display = 'block';
            responseMessage.textContent = response.message;
            fileUploadContainer.style.display = 'block';
        } else {
            // Show the response modal with an error message
            responseModal.style.display = 'block';
            responseMessage.textContent = response.message;
            fileUploadContainer.style.display = 'none';
        }

        // Hide the waiting modal
        waitingModal.style.display = 'none';
    }, 2000);
});

// Add event listener to the upload button
uploadButton.addEventListener('click', () => {
    // Get the uploaded file
    const file = fileUpload.files[0];

    // Simulate a file upload to the server (replace with your actual server API)
    console.log('File uploaded:', file);

    // Show the confirm button
    confirmButton.style.display = 'block';
});

// Add event listener to the confirm button
confirmButton.addEventListener('click', () => {
    // Simulate a confirmation response to the server (replace with your actual server API)
    console.log('Reservation confirmed');

    // Close the response modal
    responseModal.style.display = 'none';
});

// Add event listener to the cancel button
cancelButton.addEventListener('click', () => {
    // Simulate a cancellation response to the server (replace with your actual server API)
    console.log('Reservation cancelled');

    // Close the response modal
    responseModal.style.display = 'none';
});