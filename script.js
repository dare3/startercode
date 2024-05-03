document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('fruit');
    const suggestionsContainer = document.querySelector('.suggestions');

    // Array containing the list of fruits
    const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

    // Function to filter fruits based on input value
    function search(str) {
        return fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
    }

    // Function to handle input event (when user types in the input field)
    function searchHandler(e) {
        const inputVal = e.target.value.trim();
        const results = search(inputVal);
        showSuggestions(results);
    }

    // Function to display the results dropdown
    function showSuggestions(results) {
        const dropdown = suggestionsContainer.querySelector('ul');
        dropdown.innerHTML = ''; // Clear previous dropdown items

        // If there are results, create list items for each result and append them to the dropdown
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result;
                dropdown.appendChild(li);
            });
            suggestionsContainer.style.display = 'block'; // Show dropdown
        } else {
            suggestionsContainer.style.display = 'none'; // Hide dropdown if no results
        }
    }

    // Function to handle click event on suggestions (when user clicks on a suggestion)
    function useSuggestion(e) {
        if (e.target.tagName === 'LI') {
            input.value = e.target.textContent; // Populate search bar with clicked suggestion
            suggestionsContainer.style.display = 'none'; // Hide dropdown after selecting suggestion
        }
    }

    // Add event listeners to handle input and click events
    input.addEventListener('input', searchHandler); // Input event listener for typing in the input field
    suggestionsContainer.addEventListener('click', useSuggestion); // Click event listener for selecting a suggestion
});
