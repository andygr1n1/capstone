1. initialized app with https://python-webpack-boilerplate.readthedocs.io/en/latest/
- pip freeze > requirements.txt
- source myenv/bin/activate
- python manage.py collectstatic
- gunicorn --bind 0.0.0.0:8000 capstone.wsgi:application             
- python manage.py runserver
- docker-compose up --build
<!-- 2. created django project and app
3. created django models
4. created django admin
5. created django views
6. created django urls
7. created django templates
8. created django forms
9. created django serializers
10. created django rest framework -->
