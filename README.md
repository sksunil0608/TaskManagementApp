# TaskManagement

This project combines a backend and frontend application for task management.
 1. Clone the repository and navigate to the root directory:
    ```bash
    git clone https://github.com/sksunil0608/TaskManagementApp
    cd TaskManagement
    ```

### Add `.env` file in the backend directory

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a `.env` file and add the following environment variables:
    ```bash
    echo USER_NAME='YourDatabaseUserName' >> .env
    echo USER_PASSWORD='YourDatabasePassword' >> .env
    PORT=4000
    ```
# Make Sure to Change Environment Variables

### Installation and Setup

To install the project and start both backend and frontend servers together, follow these steps:


2. Install dependencies for both the backend:
    ```bash
    npm install
    ```

3. Start the backend:
    ```bash
    npm start
    ```

4. Navigate to the frontend directory:
    ```bash
    cd TaskManagementApp/frontend
    ```

5. Install frontend dependencies:
    ```bash
    npm install
    ```

6. Start the frontend server:
    ```bash
    npm start
    ```

This will start both backend and frontend servers concurrently. You can access the backend at `http://localhost:backend_port` and the frontend at `http://localhost:frontend_port`. Your fronted development server will open automatically at default port `http://localhost:3000`
You can manually also check it : `http://localhost:3000`
# TaskManagementApp
# TaskManagementApp
