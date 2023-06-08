# Morse Translate

## Demo & Snippets

-   Deployment:(https://maksimumeffort.github.io/morse-translate/)

-   English
<img width="1008" alt="Screen Shot 2023-06-08 at 3 02 23 pm" src="https://github.com/maksimumeffort/morse-translate/assets/23536155/070d1c90-e11c-495e-ac82-9949e988d22b">
-   Morse
<img width="1012" alt="Screen Shot 2023-06-08 at 3 02 59 pm" src="https://github.com/maksimumeffort/morse-translate/assets/23536155/c269646f-9738-47d5-980e-5abe66ce54b5">

---

## Requirements / Purpose

### MVP  
Create a user interface that allows the user to either input some English text or some Morse Code

-   Create JS functions that would allow the user to:
-   translate their English text into Morse Code
-   Morse Code into English text

-   Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

-   Bonus: Handle other characters as well

-   Bonus: Detect if a piece of text is english or morse and translate accordingly

-   Split your code between data, logic functions and dom functions

-   Develop unit tests for all of your logic functions

-   Explore and discover edge cases in your code to further develop your tests

### Purpose of project
-   The focus of this project will be putting your code into modules and creating unit tests The User Interface will have to look good but should remain simple (additional features, ie. sounds, lights, etc, should only be added once the MVP has been completed.)
-   Stack used: JavaScript, HTML, CSS

---

## Build Steps

-   After forking repository in command line run:
```npm install```
-   To deploy application on local server run:
```npm install http-server -g```
-   then run:
```http-server``` 

---

## Design Goals / Approach

-   3 Color Scheme used to make the design easy on the eye
-   Bright color used to indicate the primary language being translated

---

## Features

-   Dictionary of Morse code
-   Dictionary of Morse code special characters and numbers (not being used by the script)
-   Morse code to English translation functionality
-   English to Morse code translation functionality
-   Test suite written in Jest

---

## Known issues

-   Special characters and numbers not recognised by the translator
-   Translation from Morse code to english will always be in capital letters

---

## Future Goals

-   Add functionality for translation tool to recognise numbers and special characters
-   Add functionality for translation tool to support more languages

---

## What did you struggle with?

-   Writing a comprehensive test suite
-   working with inputs and eventListeners, it took me a long time to realise that the site's refreshes the page by default

---

## Licensing Details

-   MIT

---
