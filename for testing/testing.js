function showText(id) {
    // Hide all paragraphs initially (optional)
    var allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none';
    });

    // Show the paragraph with the specified id
    var selectedParagraph = document.getElementById(id);
    if (selectedParagraph) {
        selectedParagraph.style.display = 'block';
        
        // Display the text content in the output paragraph
        var outputTextElement = document.getElementById("outputText");
        outputTextElement.innerText = "Displayed text: " + selectedParagraph.innerText;
    } else {
        console.error("Paragraph with ID '" + id + "' not found.");
    }
}