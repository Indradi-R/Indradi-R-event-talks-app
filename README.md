# Event Talks App

## Preview

**[Screenshot Placeholder]**

_To generate a screenshot, please run the application locally as described in the "How to Run" section below, and capture a screenshot of the main schedule page in your browser. You can then replace this placeholder with the image._

## Detail

This application provides a simple, single-page website to display the schedule for a 1-day technical talks event. It features a Node.js backend to serve the event data and a pure HTML, CSS, and JavaScript frontend to render the schedule dynamically with client-side category-based search functionality.

**Key Features:**
*   Displays a daily schedule of technical talks and breaks.
*   Talks are 1 hour long with 10-minute transitions.
*   Includes a 1-hour lunch break.
*   Starts at 10:00 AM.
*   Allows users to search and filter talks by category.

**Technologies Used:**
*   **Backend:** Node.js, Express.js
*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)

## How to Run Locally

To get this application up and running on your local machine, follow these steps:

**1. Clone the repository:**
   ```bash
   git clone https://github.com/Indradi-R/Indradi-R-event-talks-app.git
   cd Indradi-R-event-talks-app
   ```

**2. Install Node.js dependencies:**
   *   Navigate to your project directory in the terminal:
       ```bash
       cd /home/student_03_c017c4ede421/gemini-cli-projects
       ```
   *   Install Express.js, which is used by the Node.js server:
       ```bash
       npm install express
       ```

**3. Start the Node.js server:**
   *   In the same project directory, run:
       ```bash
       node server.js
       ```
   *   You should see output like: `Server running on http://localhost:3000`.
   *   Keep this terminal window open and the server running.

**4. Serve the `index.html` file:**
   *   Open a **new** terminal window.
   *   Navigate to the `public` directory:
       ```bash
       cd /home/student_03_c017c4ede421/gemini-cli-projects/public
       ```
   *   Start a simple Python HTTP server:
       ```bash
       python3 -m http.server 8000
       ```
   *   You should see output like: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`.

**5. Access the website:**
   *   Open your web browser and go to: `http://localhost:8000`

The website will load, and you can interact with the schedule and search functionality.
