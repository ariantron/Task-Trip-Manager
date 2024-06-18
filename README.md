# Task-Trip Manager

### Project Overview
You are required to build a simple web application using the Symfony framework and React. The application will manage tasks and trips. The main page will have two sections: tasks on the left and trips on the right. Users can create trips, assign a driver and truck to each trip, and allocate tasks to these trips.

### Requirements
1. **Main Page Layout**
   - **Left Section (Tasks)**
     - Display a list of tasks.
     - Each task can only be added to one trip.
   - **Right Section (Trips)**
     - Display tabs on top, one for each trip.
     - Each tab shows the details of a specific trip including its driver, truck, and assigned tasks.
     - A "New" button allows users to create a new trip.
     - When creating a trip, users can select a driver and a truck from the existing list.

2. **Database Seeding**
   - Seed the database with at least:
     - 50 tasks
     - 10 drivers
     - 10 trucks

3. **Functionalities**
   - Users can create new trips.
   - Users can assign a driver and a truck to each trip during its creation.
   - Users can add tasks to trips.
   - Tasks can only be added to one trip.

4. **Tech Stack**
   - Backend: Symfony Framework
   - Frontend: React with TypeScript and Vite
   - Database: Postgres

### Structure
#### Frontend:
- React components for task list, trip details, and trip creation modal.
- State management for handling tasks and trips.

#### Backend:
- Symfony controllers manage tasks, trips, drivers, and trucks.
- Database migrations (Fixtures) and seeders for initial data setup.

### Environment Configuration
Both front-end and back-end modules can be configured using `.env` files. Examples of the `.env` files are provided below:

#### Front-end `.env.example`
```text
VITE_APP_PORT=
VITE_API_URL=""
```

#### Back-end `.env.example`
```text
APP_NAME=
APP_PORT=

DB_NAME=
DB_USER=
DB_PORT=
DB_PASSWORD=
DATABASE_URL="postgres://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}"

CORS_ALLOW_ORIGIN="*"
```

### Docker Deployment
Both modules can be deployed using Docker Compose. Ensure Docker and Docker Compose are installed on your system. Use the following commands to deploy the application:

1. **Build and Start the Containers:**
   ```sh
   docker-compose up -d --build
   ```

2. **Stop the Containers:**
   ```sh
   docker-compose stop
   ```

3. **Stop and Remove the Containers:**
   ```sh
   docker-compose down -v
   ```

### Getting Started
1. **Clone the Repository:**
   ```sh
   git clone <repository_url>
   cd task-trip-manager
   ```

2. **Set Up Environment Variables:**
   - Create a `.env` file in both the `frontend` and `backend` directories by copying from `.env.example` and filling in the necessary values.
   - The VITE_API_URL parameter refers to the address of the Back-End API Service.


3. **Start the Application:**
   ```sh
   docker compose up --build
   ```

4. **Access the Application:**
   - Frontend: Open your browser and navigate to `http://localhost:<VITE_APP_PORT>`
   - Backend API: Accessible at `http://localhost:<APP_PORT>`

### Project Structure
```
task-trip-manager/
│
├── front-end/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── docker-compose.yml
│   └── ...
│
├── back-end/
│   ├── config/
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   ├── docker-entrypoint.sh
│   ├── docker-compose.yml
│   └── ...
│
└── README.md
```

### Screenshot
![Visual Layout (Mockup)](./assets/images/screenshot.png)

### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
