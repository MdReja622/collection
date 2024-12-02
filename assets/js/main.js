document.addEventListener('DOMContentLoaded', () => {
    const openCanvasButton = document.querySelector('#openCanvasButton');
    const bodyOverlay = document.querySelector('.body-overlay');
    const filterCanvas = document.querySelector('#filterCanvas');
    const closeCanvasButton = document.querySelector('#closeCanvasButton');





    // Open canvas when the open button is clicked
    if (openCanvasButton) {
        openCanvasButton.addEventListener('click', () => {
            if (filterCanvas) {
                filterCanvas.style.left = '0'; // Slide in
            }
            if (bodyOverlay) {
                bodyOverlay.classList.add('opend'); // Add overlay class
            }
        });
    }
    // Close canvas when the close button is clicked
    if (closeCanvasButton) {
        closeCanvasButton.addEventListener('click', () => {
            if (filterCanvas) {
                filterCanvas.style.left = '-480px'; // Slide out
            }
            if (bodyOverlay) {
                bodyOverlay.classList.remove('opend'); // Remove overlay class
            }
        });
    }
    // Close canvas when the close button is clicked
    if (bodyOverlay) {
        bodyOverlay.addEventListener('click', () => {
            if (bodyOverlay) {
                bodyOverlay.classList.remove('opend'); // Slide out the canvas
            }
            if (filterCanvas) {
                filterCanvas.style.left = '-480px'; // Slide out
            }
        });
    }


    const availableToggle = document.querySelector('.available-toggle');
    const stockToggle = document.querySelector('.stock-toggle');

    if (availableToggle && stockToggle) {
        availableToggle.addEventListener('click', () => {
            availableToggle.classList.toggle('active'); // Toggle visibility
            stockToggle.classList.toggle('active'); // Toggle visibility
        });
    }


    imagesLoaded(grid, function () {
        iso.layout(); // Ensure proper layout after images are loaded
    });



    // Initialize Isotope
    var grid = document.querySelector('.product-grid');
    var iso = new Isotope(grid, {
        itemSelector: '.product-card',
        layoutMode: 'fitRows',
        filter: '*' // Start with no filter (show all)
    });

    // Filter items when select changes
    document.getElementById('filter-select').addEventListener('change', function (event) {
        var selectedCategory = event.target.value; // Get the selected category value
        var filterValue = selectedCategory === '*' ? '*' : `[data-category="${selectedCategory}"]`; // Build the filter selector

        iso.arrange({
            filter: filterValue // Apply the filter based on the data-category attribute
        });
    });




    const quickView = document.querySelectorAll('.quick-view');
    const bodyOverlay2 = document.querySelector('.body-overlay2');
    const cartCanva = document.querySelector('.cart-canva');
    const cartClose = document.querySelector('#cartClose');
    const cartProductlist = document.querySelector('.cart-product-list');




    quickView.forEach(function (a) {
        a.addEventListener('click', () => {
            bodyOverlay2.classList.add('opened');
            cartCanva.classList.add('opened');
            cartProductlist.classList.add('opened');
        });
    });

    bodyOverlay2.addEventListener('click', () => {
        bodyOverlay2.classList.remove('opened')
        cartCanva.classList.remove('opened')
        cartProductlist.classList.remove('opened')
    })
    cartClose.addEventListener('click', () => {
        bodyOverlay2.classList.remove('opened')
        cartCanva.classList.remove('opened')
        cartProductlist.classList.remove('opened')
    })

    // sizeButtons 

    const sizeButtons = document.querySelectorAll('.size-button');
    const labelValue = document.querySelector('.label-value');

    // Loop through each size button
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the text of the clicked button
            const selectedSize = this.textContent;

            // Set the label value to the selected size
            labelValue.textContent = selectedSize;

            // Remove the 'active' class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            this.classList.add('active');
        });
    });

    // Get elements
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    // Function to update buttons based on quantity
    function updateQuantityButtons() {
        const quantity = parseInt(quantityInput.value, 10);

        // Disable decrease button if quantity is 1
        if (quantity <= 1) {
            decreaseButton.disabled = true;
        } else {
            decreaseButton.disabled = false;
        }

        // Optionally, disable the increase button based on any max value if needed
        // For example, let's assume 100 is the max value
        if (quantity >= 100) {
            increaseButton.disabled = true;
        } else {
            increaseButton.disabled = false;
        }
    }

    // Decrease quantity
    decreaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value, 10);
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateQuantityButtons();
        }
    });

    // Increase quantity
    increaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value, 10);
        quantity++;
        quantityInput.value = quantity;
        updateQuantityButtons();
    });

    // Initial check when page loads
    updateQuantityButtons();



});



