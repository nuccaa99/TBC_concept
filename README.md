# TBC Concept Website Clone

This project is a clone of the TBC Concept website (https://tbcconcept.ge/ge/) developed using Vanilla JavaScript, pure CSS, and HTML. The project aims to replicate the original website with full responsiveness and cross-browser compatibility.

## Project Structure

The project is structured with a single `index.html` file and an organized `styles` folder, which contains separate files for resetting elements, storing variables, general styling, and responsive designs for various devices (laptop, tablet, and mobile). Additionally, custom fonts from the TBC website were integrated using `@font-face`, and all visual assets, including pictures, logos, and SVGs, are managed in an `assets` folder.

## Viewing the Project

To view the project, you can:
- Open `index.html` directly in your browser.
- Open the project via Visual Studio Code's Live Server extension.
- See the deployed version on GitHub Pages at [TBC Concept Clone](https://nuccaa99.github.io/TBC_concept/).

## Key Features

1. **HTML and CSS Structure:**
   - Single `index.html` file.
   - `styles` folder containing:
     - `reset.css` for resetting all elements.
     - `variables.css` for storing CSS variables.
     - Separate CSS files for general styling and responsive designs (laptop, tablet, and mobile).

2. **Fonts:**
   - Custom fonts integrated from the TBC website using `@font-face`.

3. **Visual Assets:**
   - `assets` folder for all images, logos, and SVGs.

4. **Responsive Design:**
   - Fully responsive design imitating the original website inch by inch.
   - Media queries for different devices (laptop, tablet, mobile).
   - Header and footer transform into functional dropdowns on smaller screens (burgerMenu.js).

5. **Interactive Elements:**
   - Hovering and transition effects using `:hover` and `transition` for smooth animations.
   - Burger menu on the header for smaller screens with a toggle functionality and distinctive animation using `@keyframes`.
   - Dropdown menus in the header that open on click, with logic implemented to close them on outside click (headerDropdown.js).

6. **Sliders:**
   - Three working sliders that can be navigated by dragging (slider.js).
   - Sliders feature a synchronized bottom scrollbar.
   - Arrow buttons for navigating between slider items.

7. **Custom Scroll Design:**
   - Custom scroll design that enhances the visual experience (customScrollbar.js).
   - Scrollbar does not appear on the header.
   - Scrollbar disappears after 1 second of inactivity.

8. **Cross-Browser Compatibility:**
   - Ensures consistent performance and appearance across all major browsers: Chrome, Safari, Mozilla Firefox, and Edge.


