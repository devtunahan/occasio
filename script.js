 // Get the elements by their ID
 var popupLink = document.getElementById("feedbackBtn");
 var popupWindow = document.getElementById("popup-window");
 var submitButton = document.getElementById("submit-button");
 var closeButton = document.getElementById("close-button");
 var body = document.body;

 // Form variables
 var nameInput = document.getElementById("name");
 var feedbackTextArea = document.getElementById("feedback");


 // Show the pop-up window when the link is clicked
 popupLink.addEventListener("click", function(event) {
   event.preventDefault();
   popupWindow.style.display = "block";
   body.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
 });
 // Hide the pop-up window when the close button is clicked
 submitButton.addEventListener("click", function() {
   popupWindow.style.display = "none";
   body.style.backgroundColor = "rgba(0, 0, 0, 0)";
   nameInput.value = "";
   feedbackTextArea.value = "";
   alert("Thank you for your feedback!");
 });

  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
    body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    nameInput.value = "";
    feedbackTextArea.value = "";
  });