# Use the official Python image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs

# Install npm
RUN npm install

# Build the frontend
RUN npm run build

# Install supervisord
RUN apt-get update && apt-get install -y supervisor

# Copy the supervisor configuration file
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the required ports
EXPOSE 8000 9091

# Start the supervisor process to run both backend and frontend
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]