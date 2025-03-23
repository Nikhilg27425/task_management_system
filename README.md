# Task Management System
#
# A modern, web-based task management application built with HTML, CSS, and JavaScript. This tool allows users to create, schedule, and manage tasks with automated status updates, priority sorting, and a clean, responsive interface.
#
# ## Features
#
# ### Core Functionalities
# - **Task Creation & Scheduling**: Add tasks with a title, description, priority (High, Medium, Low), and due date/time. Tasks are automatically sorted by priority.
# - **Task Execution & Auto-Completion**: A timer tracks task schedules, moving tasks to "Ongoing" when due and allowing manual completion.
# - **Completion & Expiry Handling**: Completed tasks move to a "Completed" tab; overdue tasks shift to a "Missed" tab with a red warning.
#
# ### Advanced Features
# - **DOM Manipulation & Event Handling**: Dynamic UI updates and efficient event delegation for task interactions.
# - **Asynchronous JavaScript**: Simulated API calls with Promises and Async/Await, including a loading spinner.
# - **State Management**: Tasks persist across page reloads using LocalStorage.
# - **Error Handling**: Try-catch blocks manage API errors with user-friendly messages.
#
# ### Bonus Features
# - **Drag-and-Drop**: Reorder tasks using the HTML5 Drag API (basic implementation included; reordering logic can be extended).
# - **Dark Mode**: Toggle between light and dark themes with CSS and JavaScript.
# - **Push Notifications**: Receive alerts 1 minute before a task starts (requires browser permission).
#
# ## Demo
# Open `index.html` in a modern browser to see the application in action. Add tasks, watch them transition between states, and explore the dark mode and notification features.
#
# ## Installation
#
# 1. **Clone or Download**:
#    - Clone this repository: `git clone <repository-url>`
#    - Or download the ZIP file and extract it.
#
# 2. **Project Structure**:
#    ```
#    task-scheduler/
#    ├── index.html      # Main HTML file
#    ├── styles.css      # Styling for the application
#    ├── script.js       # JavaScript logic
#    └── README.md       # This file
#    ```
#
# 3. **Run the Application**:
#    - Open `index.html` in a modern web browser (e.g., Chrome, Firefox, Edge).
#    - No server is required; it runs locally as a static site.
#
# 4. **Permissions**:
#    - Allow notifications when prompted to enable the Notification API feature.
#
# ## Usage
#
# 1. **Adding a Task**:
#    - Fill in the title, description, priority, and due date/time in the form.
#    - Click "Add Task" to create it.
#
# 2. **Managing Tasks**:
#    - View tasks in the "Pending," "Ongoing," "Completed," or "Missed" tabs.
#    - Click "Complete" on pending tasks to mark them as done manually.
#    - Watch tasks automatically move to "Ongoing" when due and "Missed" if overdue.
#
# 3. **Customization**:
#    - Toggle dark mode using the button in the header.
#    - Drag tasks to reorder them (basic drag functionality implemented).
#
# ## Technical Details
#
# - **HTML**: Structured with semantic elements and a responsive layout.
# - **CSS**: Uses CSS variables for theming, flexbox/grid for layout, and animations for the spinner.
# - **JavaScript**: 
#   - Class-based architecture (`TaskManager`) for organization.
#   - Features event delegation, async operations, and local storage.
#   - Includes simulated API calls with a 1-second delay.
#
# ### Dependencies
# - None! This is a vanilla JavaScript project requiring only a modern browser.
#
# ## Future Improvements
# - Full drag-and-drop reordering logic.
# - Integration with a real backend API.
# - Task categories or tags.
# - Export/import tasks functionality.
#
# ## Contributing
# Feel free to fork this repository, submit pull requests, or open issues for bugs and feature requests.
#
# ## License
# This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
#
# ## Author
# Built with ❤️ by [Nikhil] 
