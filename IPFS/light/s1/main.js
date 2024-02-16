// Функция для загрузки содержимого из main.html и вставки его в index.html
function loadMainContent() {
    fetch('https://cdn.jsdelivr.net/gh/mysticfly/cdn/IPFS/light/s1/main-v1.html')
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
