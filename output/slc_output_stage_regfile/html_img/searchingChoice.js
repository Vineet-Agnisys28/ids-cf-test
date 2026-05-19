function handleCheckboxChange() {
    var checkbox = document.getElementById('addressSearch');
    var progressBar = document.getElementById('progressBar');

    // Reset the progress bar
    progressBar.style.width = '0%';

    if (checkbox.checked) {
        var oldScript = document.querySelector('script[src="./html_img/chunkDlist.js"]');
        if (oldScript) {
            oldScript.remove();
        }

        var newScript = document.createElement('script');
        newScript.src = './html_img/chunkDlistAddress.js';
        document.head.appendChild(newScript); // Append the new script
    } else {
        var oldScript = document.querySelector('script[src="./html_img/chunkDlistAddress.js"]');
        if (oldScript) {
            oldScript.remove();
        }

        var newScript = document.createElement('script');
        newScript.src = './html_img/chunkDlist.js';
        document.head.appendChild(newScript); // Append the new script
    }
}