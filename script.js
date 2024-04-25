// Function to manipulate the input text with preserved chapters
function manipulateTextWithChapters(text) {
    // Split the text into chapters based on newline characters
    var chapters = text.split("\n");

    // Iterate through each chapter
    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        // Manipulate the text within the chapter
        chapters[i] = manipulateText(chapter);
    }

    // Delete empty lines
     // Delete empty lines
     for (var i = 0; i < chapters.length; i++) {
        if (chapters[i] == "" && chapters[i + 1] == ""){
            chapters.splice(i, 1)
            i = 0;
        }
    }

    // Join the chapters back together with newline characters
    return chapters.join("<br>"); // Add a newline between chapters
}


// Function to manipulate the input text
function manipulateText(text) {
    // Split the text into words
    var words = text.split(" ");
    
    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var boldedWord = "";
        
        // Check if the word has more than one letter
        if (word.length > 1) {
            // Calculate the number of letters to bold
            var lettersToBold = Math.ceil(word.length / 2);
            
            // Iterate through each letter in the word
            for (var j = 0; j < word.length; j++) {
                // Bold the first half of the letters
                if (j < lettersToBold) {
                    boldedWord += "<b>" + word[j] + "</b>";
                } else {
                    boldedWord += word[j];
                }
            }
        } else {
            boldedWord = word; // If the word has only one letter, keep it as is
        }
        
        // Replace the original word with the bolded version
        words[i] = boldedWord;
    }
    
    // Join the words back together with spaces
    return words.join(" ");
}

// Function to scroll the page to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayOutput() {
    var input = document.getElementById("inputText").value;
    var manipulatedInput = manipulateTextWithChapters(input);
    document.getElementById("outputText").innerHTML = manipulatedInput;
    adjustOutputHeight(); // Adjust the height of the output textarea
    scrollToTop();
}

// Function to adjust textarea height based on content
function adjustTextareaHeight() {
    var textarea = document.getElementById("inputText");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// Function to adjust output textarea height based on content
function adjustOutputHeight() {
    var outputTextarea = document.getElementById("outputText");
    outputTextarea.style.height = "auto";
    outputTextarea.style.height = outputTextarea.scrollHeight + "px";
}

function displayOutput() {
    var input = document.getElementById("inputText").value;
    var manipulatedInput = manipulateTextWithChapters(input);
    document.getElementById("outputText").innerHTML = manipulatedInput;
    adjustOutputHeight(); // Adjust the height of the output textarea
    scrollToTop();
}