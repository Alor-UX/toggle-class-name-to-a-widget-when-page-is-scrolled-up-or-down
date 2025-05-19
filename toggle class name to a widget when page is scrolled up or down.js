// Function to handle the scroll event
function handleScrollEvent() {
   let lastScrollTop = 0;
   const icwElement = document.getElementById("[your-element-id]"); // Get the element here to ensure it's available

   // Ensure the element is found before applying styles
   if (!icwElement) {
      console.error("[your-element-id] element not found!");
      return; // Exit if the element is not found
   }

   // Add a scroll event listener to the window
   window.addEventListener("scroll", function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
         // Scroll Down - Add "your-custom-classname" class
         icwElement.classList.add("your-custom-classname");
      } else {
         // Scroll Up - Remove "your-custom-classname" class
         icwElement.classList.remove("your-custom-classname");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
   });
}

// Wait for the window to load
window.onload = function () {
   // Handle scroll events after a slight delay to ensure the #icw element is available
   setTimeout(function () {
      handleScrollEvent();
   }, 500); // Short delay to ensure the #icw element is available
};
