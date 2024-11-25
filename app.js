document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        const searchField = document.getElementById("search-field");
        const query = searchField.value.trim();

        const xhr = new XMLHttpRequest();
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});
