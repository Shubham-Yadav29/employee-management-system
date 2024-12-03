
// Employees data
const employees = [
    {
        "name": "Arjun Sharma",
        "email": "Arjun@01.com",
        "password": "123",
        "id": "1",
        "tasks": [
            {
                "task_title": "Complete Monthly Report",
                "task_description": "Prepare a comprehensive report on the progress of various company departments, including revenue, expenses, and employee performance for the past month. Submit the report to the management team by the end of the week.",
                "task_date": "2024-11-01",
                "category": "Report",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            },
        ],
        "task_count": {
            "active": 0,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "name": "Priya Verma",
        "email": "Priya@02.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Organize Team Meeting",
                "task_description": "Schedule and arrange a team meeting to discuss project updates, team goals, and any issues. Prepare an agenda, send invites to the team, and ensure that meeting materials are ready before the session.",
                "task_date": "2024-11-01",
                "category": "Meeting",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Prepare Financial Overview",
                "task_description": "Compile financial data, including expenses, income, and forecasts for the quarter. Prepare a detailed report and presentation to provide an overview of the company’s financial health to the senior management team.",
                "task_date": "2024-11-02",
                "category": "Finance",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 0,
            "new_task": 2,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "name": "Ravi Patel",
        "email": "Ravi@03.com",
        "password": "123",
        "tasks": [

        ],
        "task_count": {
            "active": 0,
            "new_task": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "name": "Sita Reddy",
        "email": "Sita@04.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Update Website Content",
                "task_description": "Review and update content across the company website, ensuring all information is current and relevant. Add new content to reflect recent changes in the company’s services and offerings.",
                "task_date": "2024-11-01",
                "category": "Content",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            },
        ],
        "task_count": {
            "active": 0,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "name": "Aarti Kumari",
        "email": "Aarti@05.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Attend Client Meeting",
                "task_description": "Attend a scheduled meeting with a client to discuss project progress, provide updates, and clarify any concerns. Prepare a presentation highlighting key achievements and next steps for the project.",
                "task_date": "2024-11-01",
                "category": "Client Relations",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Prepare Product Demo",
                "task_description": "Develop and prepare a demo for the new product. Ensure all aspects of the product are presented clearly, addressing potential client questions. Set up the demo environment and rehearse before the actual presentation.",
                "task_date": "2024-11-02",
                "category": "Sales",
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false
            },
        ],
        "task_count": {
            "active": 0,
            "new_task": 2,
            "completed": 0,
            "failed": 0
        }
    }
];


// Admin data
const admin = [
    {
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setlocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees)); // Ensure to stringify the data
    localStorage.setItem("admin", JSON.stringify(admin)); // Also store admin data
};
export const getlocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return { employee, admin };  // Return both as an object
};

// export  setlocalStorage;
export default getlocalStorage;


//Hello!

// It feels like a long time ago that I started working on this project – over 10-15 days of hard work, and I’m excited to finally share the results with you! 🎉

// I’ve completed an Employee Management System, where managers can assign tasks to employees, and employees can mark their work as completed or failed. The records of their completed or failed tasks are conveniently displayed in the header.

// The admin also has access to the entire dashboard, with the ability to view and manage all employees’ tasks and their progress. While this is not a large-scale application ready for real-world deployment, it’s been a fantastic project to grasp the fundamentals behind bigger time-tracking applications.

// I’ve used local storage to temporarily store employee data, and as a special touch, I’ve included a login system where both employees and the admin can access their dashboards using their credentials (email and password).

// Below is the login data for employees and the admin:

// Name	Email	Password
// Arjun Sharma	Arjun@01.com	123
// Priya Verma	Priya@02.com	123
// Ravi Patel	Ravi@03.com	123
// Sita Reddy	Sita@04.com	123
// Aarti Kumari	Aarti@05.com	123
// This project has provided a great hands-on experience with basic concepts and workflows that could be applied to larger, more complex systems in the future.

// Feel free to check out the project live here: Employee Management System

// For the source code, you can explore it on GitHub: GitHub Repository

// Thanks for reading, and feel free to ask me any questions if you'd like to know more about the project!

// Best regards,
// [Your Name]