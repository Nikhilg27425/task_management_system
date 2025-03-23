class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentTab = 'pending';
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadTasks();
        this.checkTaskStatus();
        setInterval(() => this.checkTaskStatus(), 1000);
    }

    bindEvents() {
        document.getElementById('addTask').addEventListener('click', () => this.addTask());
        document.getElementById('darkModeToggle').addEventListener('click', () => 
            document.body.classList.toggle('dark-mode'));
        document.querySelector('.tabs').addEventListener('click', (e) => {
            if (e.target.classList.contains('tab')) {
                this.switchTab(e.target.dataset.tab);
            }
        }, true); // Capture phase

        // Event delegation with bubbling
        document.getElementById('taskList').addEventListener('click', (e) => {
            if (e.target.classList.contains('complete-btn')) {
                this.completeTask(e.target.dataset.id);
            }
        });
    }

    async loadTasks() {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
        
        try {
            // Simulated API call
            const tasks = await new Promise(resolve => 
                setTimeout(() => resolve(this.tasks), 1000));
            this.renderTasks();
        } catch (error) {
            alert('Error loading tasks: ' + error.message);
        } finally {
            spinner.style.display = 'none';
        }
    }

    addTask() {
        const task = {
            id: Date.now(),
            title: document.getElementById('taskTitle').value,
            desc: document.getElementById('taskDesc').value,
            priority: document.getElementById('taskPriority').value,
            due: new Date(document.getElementById('taskDue').value).getTime(),
            status: 'pending'
        };

        this.tasks.push(task);
        this.tasks.sort((a, b) => {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        this.saveTasks();
        this.renderTasks();
        
        if (Notification.permission === 'granted') {
            this.scheduleNotification(task);
        }
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        
        this.tasks
            .filter(task => task.status === this.currentTab)
            .forEach(task => {
                const taskEl = document.createElement('div');
                taskEl.className = `task priority-${task.priority} ${task.status === 'missed' ? 'missed' : ''}`;
                taskEl.draggable = true;
                taskEl.dataset.id = task.id;
                taskEl.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.desc}</p>
                    <small>Due: ${new Date(task.due).toLocaleString()}</small>
                    ${task.status === 'pending' ? 
                        `<button class="complete-btn" data-id="${task.id}">Complete</button>` : ''}
                `;
                
                taskEl.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', task.id);
                });
                
                taskList.appendChild(taskEl);
            });

        taskList.addEventListener('dragover', (e) => e.preventDefault());
        taskList.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            // Implement reordering logic here if needed
        });
    }

    checkTaskStatus() {
        const now = Date.now();
        this.tasks.forEach(task => {
            if (task.status === 'pending' && task.due <= now) {
                task.status = 'ongoing';
            } else if (task.status === 'ongoing' && task.due + 60000 < now) {
                task.status = 'missed';
            }
        });
        this.saveTasks();
        this.renderTasks();
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === Number(id));
        if (task) {
            task.status = 'completed';
            this.saveTasks();
            this.renderTasks();
        }
    }

    switchTab(tab) {
        this.currentTab = tab;
        document.querySelectorAll('.tab').forEach(t => 
            t.classList.toggle('active', t.dataset.tab === tab));
        this.renderTasks();
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    scheduleNotification(task) {
        const timeUntilDue = task.due - Date.now();
        setTimeout(() => {
            new Notification('Task Starting Soon', {
                body: `${task.title} is about to start!`
            });
        }, Math.max(0, timeUntilDue - 60000)); // 1 minute before
    }
}

// Request notification permission and initialize
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
}
new TaskManager();