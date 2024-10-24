from django.middleware.csrf import get_token
import json


def jsonuser(request):
    """
    A context processor to inject user data into all views.
    """
    if request.user.is_authenticated:
        user_data = {
            'id': request.user.id,
            'username': request.user.username,
            'email': request.user.email,
            # Add more fields as needed
        }
    else:
        user_data = None

    csrftoken = get_token(request)

    return {
        'jsonuser': json.dumps(user_data),
        'appIsAuthenticated': json.dumps(request.user.is_authenticated),
        'appCsrftoken': csrftoken,
    }
