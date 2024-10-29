# Capstone Crystal Mind is a Virtual Event Planner and Scheduler.

## This web application is utilizing:

-   Django on the back-end and JavaScript (React, Typescript) on the front-end.
-   TailwindCSS for styling and antd library for the UI components (React, Typescript).
-   Web application is mobile responsive.
-   Docker is utilized for containerization and building the application.

## Overview:

A platform for planning, managing, and attending virtual events and tasks. Users can create events, invite participants, and manage schedules through a centralized dashboard.

## Distinctiveness and Complexity

This project stands out due to its innovative approach to virtual event planning and scheduling, leveraging real-time communication technologies to enhance user interaction and collaboration.

Here are the key aspects that highlight its distinctiveness and complexity:

1. Real-Time Communication with WebSockets:
The project utilizes WebSockets to enable real-time communication between users. This is evident in the implementation of features such as the interactive messenger for event participants, which allows for instant messaging and updates without the need for page refreshes.
The use of Django Channels and WebSockets facilitates real-time updates for tasks, ensuring that all participants have the most current information. This is a significant enhancement over traditional HTTP-based communication, which can be slower and less interactive.

2. Advanced Event Management Features:
Users can create and manage tasks with detailed information, including physical or virtual locations, agendas, participants. 

3. Integration of Modern Front-End Technologies:
The front-end is built using React and TypeScript, with TailwindCSS for styling and the Ant Design library for UI components.
4. Scalable and Maintainable Architecture:
The project is structured to support scalability and maintainability, with a clear separation between the front-end and back-end components. The use of Docker for containerization further enhances its scalability, allowing for easy deployment and management across different environments.

5. Comprehensive User Management and Collaboration:
The platform supports user authentication and authorization, ensuring secure access to event management features. The integration of Django Signals for email reminders adds another layer of complexity, automating communication and enhancing user engagement.

6. Responsive and Mobile-Friendly Design:
The application is designed to be mobile-responsive, ensuring a seamless experience across different devices. This requires careful consideration of layout and interaction design.

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

### root files with dot

Generally files that starts with dot are configuration files for different tools.
They are configured by the documentation of the tool.

### frontend folder ( > src)

frontend folder contains the front-end part of the application.

A big feature is livereload. Any changes in the frontend code will trigger a rebuild of the application and the changes will be reflected in the browser.

There are a lot of files here, but generally they are all needed for the application interface to function.

### capstone folder

The capstone folder is the main Django project directory. It contains the core configuration and entry points for the Django application. Here's a breakdown of its contents:

-   **settings.py**: This file contains all the settings and configurations for the Django project, such as database settings, installed apps, middleware, and more.
-   **urls.py**: This file contains the URL declarations for the Django project, mapping URL paths to views.
-   **wsgi.py**: This is the entry point for WSGI-compatible web servers to serve the project. It's used for deploying the application in a production environment.
-   **asgi.py**: This is the entry point for ASGI-compatible web servers, which is useful for handling asynchronous tasks and WebSockets.
-   **templates/**: This directory contains HTML templates for the project, which are used to render the front-end views.
-   **migrations/**: This directory contains database migration files, which are used to apply changes to the database schema.
-   **admin.py**: This file contains the admin interface definitions, allowing for the management of models through the Django admin site.
-   **apps.py**: This file contains the application configuration, defining the app's metadata.
-   **models.py**: This file contains the data models for the application, defining the structure of the database tables.
-   **tests.py**: This file contains the test cases for the application, used to ensure the code works as expected.
-   **views.py**: This file contains the view functions for the application, which handle requests and return responses.
-   **urls.py**: This file is mentioned twice, likely indicating a mistake in the description. It should be the same as the one listed earlier.

### crystal_mind folder

The crystal_mind folder is likely a Django app within the capstone project. It contains specific functionality and features related to the application. Here's a breakdown of its contents:

-   **models.py**: Defines the data models specific to the crystal_mind app, such as User, Task, and Message.
-   **views.py**: Contains the view functions specific to the crystal_mind app, handling requests and returning responses for this app's features.
-   **urls.py**: Contains the URL declarations specific to the crystal_mind app, mapping URL paths to views within this app.
-   **admin.py**: Contains the admin interface definitions for the crystal_mind app, allowing for the management of its models through the Django admin site.
-   **apps.py**: Contains the application configuration for the crystal_mind app, defining its metadata.
-   **templates/**: Contains HTML templates specific to the crystal_mind app, used to render its front-end views.
-   **migrations/**: Contains database migration files specific to the crystal_mind app, used to apply changes to its database schema.
-   **consumers.py**: Contains WebSocket consumers for handling real-time communication features.
-   **routing.py**: Defines the WebSocket URL routing for the crystal_mind app.



# Development (Unix)

-   python -m venv myenv
-   source myenv/bin/activate
-   pip install --no-cache-dir -r requirements.txt
-   python manage.py makemigrations crystal_mind
-   python manage.py migrate
-   python manage.py createsuperuser
-   npm install
-   npm run dev (for the front-end)
-   uvicorn capstone.asgi:application --host 127.0.0.1 --port 8000 (for the back-end)


# Notes

-   https://python-webpack-boilerplate.readthedocs.io/en/latest/setup_with_django/ as webpack boilerplate
-   pip freeze > requirements.txt (to create requirements.txt)
-   pip install --no-cache-dir -r requirements.txt (to install dependencies)
-   python manage.py createsuperuser (to create a superuser)
-   python manage.py makemigrations crystal_mind (to create migrations for the crystal_mind app)
-   python manage.py migrate (to apply migrations to the database)
-   python manage.py collectstatic (to collect static files if needed)
-   python manage.py runserver (for http requests, ws will not work with this)
-   pip install "uvicorn[standard]" (to install uvicorn)
-   uvicorn capstone.asgi:application --host 127.0.0.1 --port 8000 (for websockets)


