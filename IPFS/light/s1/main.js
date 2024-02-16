// Функция для загрузки содержимого из main.html и вставки его в index.html
function loadMainContent() {
    fetch('main.html')
        .then(response => response.text())
        .then(data => {
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error('Error loading the main content:', error));
}

// Загрузим основное содержимое при загрузке страницы
window.onload = loadMainContent;
