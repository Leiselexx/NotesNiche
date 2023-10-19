document.addEventListener("DOMContentLoaded", function () {

fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
fetch("imports.html")
    .then(response => response.text())
        .then(data => {
            document.getElementById("imports-placeholder").innerHTML = data;
        });




//////////////////////////////

        

// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Function to perform the search
function performSearch() {

  console.log('Search button clicked');
    const query = searchInput.value.trim(); // Remove leading/trailing spaces

    // Your search logic here (e.g., searching items)
    const results = searchItems(query);

    // Display search results
    displaySearchResults(results);
}

// Simulate search for items (replace with your own data)
function searchItems(query) {
    const items = [
         {
            imgSrc: 'images/img1.jpg',
            altText: 'Item 1',
            itemName: 'Ballpens',
            price: 'P99.00',
        },
        {
            imgSrc: 'images/img2.jpg',
            altText: 'Item 2',
            itemName: 'Notebooks',
            price: 'P89.00',
        },
        // Add more items here
    ];

     const results = items.filter(item => item.itemName.toLowerCase().includes(query.toLowerCase()));

    return results;
}

// Function to display search results
function displaySearchResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery';

            const itemContent = document.createElement('div');
            itemContent.className = 'item';

            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.altText;
            img.width = 600;
            img.height = 400;

            const itemName = document.createElement('p');
            itemName.textContent = item.itemName;

            const price = document.createElement('p');
            price.className = 'calendar-price';
            price.textContent = item.price;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';

            itemContent.appendChild(img);
            itemContent.appendChild(itemName);

            galleryItem.appendChild(itemContent);
            galleryItem.appendChild(price);
            galleryItem.appendChild(addButton);

            searchResults.appendChild(galleryItem);
        });
    }
}


// Attach the search function to the search button's click event
searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        performSearch();
    }
});





});

window.addEventListener("DOMContentLoaded", (event) => {
    // When the DOM is fully loaded
    const loadingAnimation = document.getElementById("loading-animation");
    
    // Set a delay (in milliseconds) before hiding the loading animation
    const delayInMilliseconds = 1500; // 3 seconds

    setTimeout(function() {
        loadingAnimation.style.display = "none"; // Hide the loading animation
    }, delayInMilliseconds);
});

let slideIndex = 1; // Start with the first slide
let slideTimeout;

showSlides(slideIndex);


// Function to navigate to the next or previous slide
function plusSlides(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Ensure the slide index stays within the valid range
  if (n > slides.length) {
    slideIndex = 1; // Go back to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length; // Go to the last slide
  }

  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Automatically change to the next slide after 10 seconds (10000 milliseconds)
  //setTimeout(showSlides, 3000);
  slideTimeout = setTimeout(function () {
    plusSlides(1); // Call the plusSlides function to move to the next slide
  }, 3000);
 

  // Update the active dot for the current slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}












