const apiUrl = 'http://192.168.1.116:5000/get_chain';

function loadChain() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('output').textContent = '❌ Error connecting to Flask: ' + error;
        });
}
