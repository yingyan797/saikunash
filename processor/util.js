function search_eng(query) {
    fetch('dict.txt')
    .then(response => response.text())
    .then(text => alert(text));
}