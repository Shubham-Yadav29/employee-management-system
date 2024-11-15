// Employees data
const employees = [
    {
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Complete the monthly report.",
                "task_date": "2024-11-01",
                "category": "Report",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Update the employee records.",
                "task_date": "2024-11-02",
                "category": "Admin",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 3",
                "task_description": "Review project proposals.",
                "task_date": "2024-11-03",
                "category": "Project Management",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Organize the team meeting.",
                "task_date": "2024-11-01",
                "category": "Meeting",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Prepare financial overview.",
                "task_date": "2024-11-02",
                "category": "Finance",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Plan the new product launch.",
                "task_date": "2024-11-01",
                "category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Coordinate with vendors for supplies.",
                "task_date": "2024-11-02",
                "category": "Procurement",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Update the website content.",
                "task_date": "2024-11-01",
                "category": "Content",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Create social media posts.",
                "task_date": "2024-11-02",
                "category": "Social Media",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Attend client meeting.",
                "task_date": "2024-11-01",
                "category": "Client Relations",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Prepare product demo.",
                "task_date": "2024-11-02",
                "category": "Sales",
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false
            },
            {
                "task_title": "Task 3",
                "task_description": "Review competitor analysis.",
                "task_date": "2024-11-03",
                "category": "Research",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": true
            }
        ]
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
    console.log(employee ,admin)
};

// export  setlocalStorage;
export default getlocalStorage;
