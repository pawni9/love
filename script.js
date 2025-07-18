document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseMessage = document.getElementById('responseMessage');
    let yesButtonSize = 1;

    yesButton.addEventListener('click', () => {
        responseMessage.textContent = "hta ana knbghiiiik 💖";
        yesButton.style.transform = 'scale(1)'; // Ensure size is normal when clicking "Yes"
    });

    noButton.addEventListener('click', () => {
        // Increase the size of the "Yes" button when "No" is clicked
        yesButtonSize += 0.1;
        yesButton.style.transform = `scale(${yesButtonSize})`;
    });
});
