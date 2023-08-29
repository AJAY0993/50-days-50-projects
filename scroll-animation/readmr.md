# Scroll Animation Example

This is a simple example of a scroll-triggered animation using HTML, CSS, and JavaScript. When the user scrolls down the page, boxes with content inside will slide in from the sides of the screen.

## Getting Started

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your preferred web browser.

3. Scroll down the page to see the scroll-triggered animation effect.

## How It Works

### HTML

The HTML file `index.html` contains a basic structure for the webpage. It includes a title, a header, and multiple `div` elements with the class `box` containing content.

### CSS

The CSS file `style.css` provides styling for the webpage elements. Notable CSS styles include:

- The `body` is set to have a flex layout, centering its content both horizontally and vertically. It also has an `overflow-x` property set to `hidden` to prevent horizontal scrolling.
- The `.box` class defines the appearance of the animated boxes. They have a fixed width, background color, padding, and a box shadow. The `transform` and `transition` properties are used to create the animation effect.

### JavaScript

The JavaScript file `main.js` contains the logic for the scroll-triggered animation. It performs the following actions:

1. It calculates the height of the browser window and selects all elements with the class `box`.

2. It defines a scroll threshold (`limit`) at 4/5th of the window height.

3. It adds an event listener to the `window` object for the `scroll` event, which triggers the `checkForTop` function.

4. The `checkForTop` function is responsible for checking the position of each `.box` element on the page. If a box's top position is within the defined threshold, it adds the class `show` to reveal the animation. Otherwise, it removes the class to hide the animation.

## Customization

You can customize this example by adjusting the styles in the `style.css` file or modifying the animation behavior in the `main.js` file. Feel free to experiment with different CSS properties and JavaScript logic to create your own scroll-triggered animations.

