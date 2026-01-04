# Component Development Assignment

This project is a modular, high-performance Comment Component built as part of a frontend development assessment. It focuses on clean architecture, rich aesthetics, and a seamless user experience.

## Getting Started

To get the project running locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Tech Stack

- **React (Vite):** Chosen for lightning-fast development and optimized build performance.
- **JavaScript (ES6+):** Core logic and state management.
- **Tailwind CSS:** For rapid, responsive, and modern UI styling.
- **Vercel:** Utilized for seamless production deployment.

## Thought Process

My approach to this assignment was structured and methodical:

1.  **Requirement Gathering:** I started by thoroughly understanding the assignment brief. I even reached out to the recruiter to clarify specific doubts to ensure the final product aligned perfectly with expectations.
2.  **Conceptualization (iPad Sketching):** Before writing any code, I used my iPad to sketch the skeleton of the component. I mapped out the user flow: adding, editing, and deleting comments, as well as how the list would be displayed.
3.  **Design Fidelity:** Since specific design styles were provided in the assignment, I strictly adhered to them to ensure a premium, production-ready look.
4.  **Architecture:** I prioritized a scalable structure by implementing a parent `CommentComponent` that orchestrates several specialized sub-components.

## Component Architecture (Separation of Concerns)

To keep the codebase maintainable and modular, I split the UI into the following sub-components:

1.  **CommentAddForm:** Handles the logic for creating new suggestions. It features a smart "collapsed" state that expands into three fields when clicked.
2.  **CommentEditForm:** Opens when a user clicks the edit button, pre-fetching the existing value for a smooth editing experience.
3.  **CommentItem:** Manages the display logic for a single submitted comment within the list.
4.  **CommentList:** Responsible for rendering the entire collection of comments and handling the empty state.
5.  **CommentHeader:** Contains the section title, the theme toggle (Dark/Light mode), and the close functionality.
6.  **FileCard:** A dedicated component for previewing attached files, complete with metadata display and hover tooltips.

## Key Features & Functionalities

-   **Dynamic Timestamps:** Enhanced the display format to include Month, Date, and Time (e.g., "Jan 4, 2:00 PM").
-   **Theme Toggling:** Fully implemented Dark/Light mode support with smooth transitions.
-   **Data Persistence:** Integrated `localStorage` to ensure comments persist across page reloads.
-   **Custom Aesthetics:** 
    -   Customized scrollbars to match the selected theme.
    -   Implemented a custom tooltip for long filenames to prevent UI overflow.
    -   Updated the Favicon to match the company branding for a professional touch.
-   **Configurable Validation:** Included a constant (`IS_DOC_REQUIRED`) to easily toggle whether supporting documents are mandatory, providing flexibility for different business rules.
-   **Form Validation:** Robust error handling for "Field Label", "Comment" and all other input fields.
-   **Responsiveness:** Fully optimized for a seamless experience across all screen sizes (Mobile, Tablet, and Desktop).
