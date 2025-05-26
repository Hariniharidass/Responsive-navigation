# Responsive Navigation & Party Time Landing Page

This project is a modern and responsive landing page for "Party Time," an event planning service, featuring a highly adaptable navigation bar. It's built with a focus on user experience across all devices, from desktops to mobile phones.

---

## ✨ Features

* **Adaptive Navigation Bar:** The core of this project is a navigation menu that fluidly transitions. On larger screens, it's a standard horizontal menu, but on smaller devices, it collapses into a compact "hamburger" menu for optimal mobile usability.
* **Sticky Header on Scroll:** The navigation bar remains fixed at the top of the viewport as the user scrolls down the page. It dynamically changes its background color (from transparent to a solid color) once the hero section is scrolled past, providing constant access and clear visual feedback.
* **Smooth Section Scrolling:** Clicking on any navigation link (`Home`, `Services`, `About`, `Contact`) initiates a smooth scroll animation to the corresponding section of the page, enhancing user navigation.
* **Active Link Highlighting:** The navigation bar visually indicates the currently active section by underlining the corresponding menu item, helping users understand their position on the page.
* **Engaging Hero Section:** A prominent hero section greets visitors with a looping video background (or a static image on very small screens for performance), immediately setting the tone.
* **Clear Call to Action:** A visible "Call us" button in the hero section encourages immediate engagement.
* **Comprehensive Service Showcase:** Dedicated sections detail the event planning services offered, complete with a responsive image gallery showcasing various event themes.
* **Informative About Us:** A section dedicated to "Party Time"'s philosophy and passion for creating memorable events.
* **Accessible Contact Information:** A clear contact section provides address, phone number, email, and an embedded map for easy location.
* **Structured Footer:** A well-organized footer includes the company logo, navigation links, contact details, and social media icons for easy access to essential information.

---

## 🛠️ Techniques Used

* **HTML5:** The project uses **semantic HTML5** for a well-structured and accessible document.
* **Sass (SCSS):** Utilized for writing modular, maintainable, and scalable CSS. This includes:
    * **Variables:** For consistent color schemes (`$text-color`, `$button-color`, `$highlight-color`) and typography (`$title-font`, `$text-font`, `$header-font`).
    * **Modularization:** `normalize.css` is imported and other styles are organized across `main.scss`, `nav.scss`, and `footer.scss` for better management.
* **CSS3:**
    * **Flexbox:** Extensively used for creating **responsive layouts**, aligning items within the navigation bar, footer, and content sections, and managing image galleries.
    * **Media Queries (`@media screen and (max-width: ...)`):** Fundamental for implementing **responsive design**, allowing the layout, font sizes, and element visibility (e.g., hamburger menu, logo name) to adapt gracefully to different screen sizes.
    * `position: fixed`: Ensures the **navigation bar remains sticky** at the top of the viewport.
    * **CSS Transitions:** Applied for **smooth visual effects**, such as the navbar's background change on scroll and menu item hover effects.
    * `object-fit: cover`: Ensures the hero video scales appropriately without distortion.
    * `box-sizing: border-box`: Simplifies layout calculations by including padding and border within an element's total width and height.
* **JavaScript:**
    * **DOM Manipulation:** Manages the **toggling of the "hamburger" menu's visibility** (`toggleBurgerMenu()`) and applying/removing the `responsive` class.
    * **`Intersection Observer API`:** Dynamically adds/re moves a `scrolled` class to the navigation bar based on whether the hero section is in view. This enables the sticky navbar's background color change effect.
    * **Event Listeners:** Handle user interactions, such as clicks on navigation links and the hamburger icon, and manage the `active` state of menu items.
* **External Libraries/Tools:**
    * **Normalize.css:** Included to provide a **consistent baseline for styling** across different browsers, reducing inconsistencies in default element renderings.
    * **Google Fonts:** Integrated for **custom typography**, enhancing the visual appeal with fonts like "Lilita One," "Dancing Script," and "Montserrat."
    * **Font Awesome:** Used for scalable vector icons (e.g., hamburger menu icon, social media icons) for visual cues.

---

## 🚀 Get Started

To explore this project locally:

1.  Clone the repository to your local machine.
2.  Open the `index.html` file in your preferred web browser.