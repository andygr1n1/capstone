# Capstone is a Virtual Event Planner and Scheduler.

# This web application is utilizing:

-   Django on the back-end and JavaScript (React, Typescript) on the front-end.
-   TailwindCSS for styling and antd library for the UI components (React, Typescript).
-   Web application is mobile responsive.
-   Docker is utilized for containerization and building the application.

# Overview:

A platform for planning, managing, and attending virtual events and tasks. Users can create events, invite participants, and manage schedules through a centralized dashboard.

# Distinctiveness and Complexity

## Key Features (Distinctiveness):

-   Event Creation and Management: Users can create events with details like location (physical or virtual), agenda, participants, and tasks.
-   Participant Collaboration: An interactive messenger for each event where participants can chat.
-   Schedule Integration: Calendar view for managing events.

## Complexity Elements:

-   Calendar integration: functional calendar for managing tasks and events.
-   Real-Time Communication: Implement WebSockets for real-time chat and event updates.
-   Django Signals: email reminders on creation of event.

# Installation and Setup

## Run docker container
prerequisites:
- any system that supports docker
- docker
- docker-compose

inside the project directory run:
```
docker-compose up -d --build
```

## Congratulations!
You have successfully installed the application and it will run on http://localhost:8088/.