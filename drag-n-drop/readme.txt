# 50 Days 50 Projects - Drag and Drop

This is a simple web application from the "50 Days 50 Projects" challenge. It demonstrates drag-and-drop functionality using HTML, CSS, and JavaScript. You can drag and drop a filled container into empty containers, providing visual feedback when interacting with the elements.

## Features
- Drag and drop a filled container into empty containers.
- Visual feedback with border changes and hover effects.

## How to Use
1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your web browser.

## Usage
- Drag the filled container (`.fill`) and drop it into one of the empty containers (`.empty`).
- When you start dragging the container, it becomes temporarily invisible to create a smoother visual experience.
- The empty container's border changes when you hover over it.
- When you drop the container into an empty container, it fills the empty space, and the border style changes.

## Code Structure
- HTML: The structure of the webpage, including empty and filled containers.
- CSS: Styles and animations for the containers and the drag-and-drop effects.
- JavaScript (`main.js`):
    - Event listeners are set up to handle drag-and-drop events.
    - Functions like `dragStart`, `dragEnd`, `dragEnter`, `dragLeave`, `dragOver`, and `dragDrop` manage the drag-and-drop functionality.
    - CSS classes are dynamically added or removed to provide visual feedback.

## Dependencies
- This project uses Font Awesome icons for design elements. The icons are loaded from an external source.

## Compatibility
- This application should work on modern web browsers that support HTML5, CSS3, and JavaScript.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
[Ajay](https://github.com/AJAY0993)

Feel free to modify and extend this project to suit your needs!
