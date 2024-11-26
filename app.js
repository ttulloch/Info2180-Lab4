document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const searchButton = document.getElementById("search-button");
    const searchField = document.getElementById("search-field");
    const resultHeading = document.getElementById("result-heading");
    const resultDiv = document.getElementById("result");
    const performSearch = () => {
        console.log("Performing search...");

        const query = searchField.value.trim();
        let url = "superheroes.php";

        if (query) {
            url = `superheroes.php?query=${encodeURIComponent(query)}`;
        }

        console.log("Request URL:", url);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log("Response received:", data);
                resultHeading.style.display = "block";
                resultDiv.innerHTML = data.trim() ? data : "<p class='not-found'>SUPERHERO NOT FOUND</p>";
            })
            .catch(error => {
                console.error("Error:", error);
                resultHeading.style.display = "block";
                resultDiv.innerHTML = "<p>An error occurred while fetching data. Please try again.</p>";
            });
    };
    searchButton.addEventListener("click", () => {
        console.log("Search button clicked");
        performSearch();
    });
    searchField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("Enter key pressed");
            performSearch();
        }
    });
});
