function refreshPowerBI() {
    // Get the embedded iframe element
    var iframe = document.getElementById('powerBIReport');

    // Construct the new URL with updated parameters (e.g., filters)
    var newUrl = iframe.src + '&action=refresh';

    // Update the iframe's source
    iframe.src = newUrl;
}