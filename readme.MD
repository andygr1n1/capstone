# Capstone is a Virtual Event Planner and Scheduler.

## This web application is utilizing:

-   Django on the back-end and JavaScript (React, Typescript) on the front-end.
-   TailwindCSS for styling and antd library for the UI components (React, Typescript).
-   Web application is mobile responsive.
-   Docker is utilized for containerization and building the application.

## Overview:

A platform for planning, managing, and attending virtual events and tasks. Users can create events, invite participants, and manage schedules through a centralized dashboard.

## Distinctiveness and Complexity

### Key Features (Distinctiveness):

-   Event Creation and Management: Users can create events with details like location (physical or virtual), agenda, participants, and tasks.
-   Participant Collaboration: An interactive messenger for each event where participants can chat.
-   Schedule Integration: Calendar view for managing events.

### Complexity Elements:

-   Calendar integration: functional calendar for managing tasks and events.
-   Real-Time Communication: Implement WebSockets for real-time chat and event updates.
-   Django Signals: email reminders on creation of event.

## Installation and Setup

### Run docker container

prerequisites:

-   any system that supports docker
-   docker
-   docker-compose

inside the project directory run:

```
docker-compose up -d --build
```

### Congratulations!

You have successfully installed the application and it will run on http://localhost:8088/.

## What’s contained in files created:

As capstone is not a small app, a lot of files were created. In this section will be generally described what’s contained in files created.

### docker-compose.yml Dockerfile nginx.conf

Files needed for the web application to run as a production application.

### requirements.txt

Contains the list of python dependencies for the project.

### package.json, package-lock.json

package.json contains the list of javascript dependencies for the project.
package-lock.json is created by npm and it is used to lock the version of the dependencies.

### tsconfig.json

tsconfig.json is the configuration file for the typescript compiler.

### tailwind.config.js postcss.config.js

These files are needed for the tailwindcss to work.

### frontend folder

frontend folder contains the front-end part of the application.

A big feature is livereload. Any changes in the frontend code will trigger a rebuild of the application and the changes will be reflected in the browser.

There are a lot of files here, but generally they are all needed for the application interface to function.

### capstone folder

capstone folder contains the back-end part of the application - django.

The capstone folder is structured as follows:

-   **capstone/**: The main Django project folder.

    -   **settings.py**: Contains all the settings and configurations for the Django project.
    -   **urls.py**: Contains the URL declarations for the Django project.
    -   **wsgi.py**: The entry point for WSGI-compatible web servers to serve project.
    -   **asgi.py**: The entry point for ASGI-compatible web servers to serve project.
    -   **templates/**: Contains HTML templates for the project.
    -   **migrations/**: Contains database migration files.
    -   **admin.py**: Contains the admin interface definitions.
    -   **apps.py**: Contains the application configuration.
    -   **models.py**: Contains the data models for the application.
    -   **tests.py**: Contains the test cases for the application.
    -   **views.py**: Contains the view functions for the application.
    -   **urls.py**: Contains the URL declarations for the application.

This structure helps in maintaining a clean and organized codebase, making it easier to manage and scale the application.

### root files with dot

Generally files that starts with dot are configuration files for different tools.
They are configured by the documentation of the tool.

# Development

-   npm run dev (for the front-end)
-   python manage.py runserver (for the back-end)
