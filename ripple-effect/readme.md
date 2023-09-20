# Ripple Effect Button

This is a simple HTML and CSS project that creates a stylish button with a ripple effect when clicked. The ripple effect gives the impression that the button reacts to user interaction, making it more visually appealing.

## Table of Contents

- [Project Overview](#project-overview)
- [Usage](#usage)
- [Files](#files)
- [How it Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Ripple Effect Button project consists of a single HTML file (`index.html`), a CSS file (`style.css`), and a JavaScript file (`main.js`). When you click the button, a white circle appears at the clicked position and expands outward, creating a ripple effect. This project is a simple example of adding interactivity to a web page using HTML, CSS, and JavaScript.

## Usage

To use this project, simply open the `index.html` file in a web browser. Click the "Click me" button, and you'll see the ripple effect in action. You can also incorporate this button into your own web projects by copying the relevant HTML, CSS, and JavaScript code.

## Files

- `index.html`: The HTML file that contains the button element and links to the CSS and JavaScript files.
- `style.css`: The CSS file that defines the styles and animations for the button and ripple effect.
- `main.js`: The JavaScript file that handles the logic for creating the ripple effect when the button is clicked.

## How it Works

When you click the button, the JavaScript code in `main.js` calculates the mouse click coordinates (X, Y) and the position of the button. It then creates a white circle (`<span>` element with the class `circle`) at the clicked position and gradually scales it up while simultaneously reducing its opacity, creating the ripple effect. After half a second (500 milliseconds), the circle element is removed from the DOM.

The CSS in `style.css` defines the button's appearance, including its color, size, and the ripple effect animation. It also includes a "Clear Fix Hack" for proper clearing of floated elements and some base styles for the entire page.

## Contributing

Contributions to this project are welcome. If you have ideas for improvements or would like to report issues, please create a GitHub issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
