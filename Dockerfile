# Use the official Python image
FROM python:3.12

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install "uvicorn[standard]"

# Copy the project files
COPY . /app/



RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt-get update && apt-get install -y supervisor
RUN npm install -g serve

RUN npm install

RUN npm run build
RUN rm -rf staticfiles

COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8000 9091

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]


