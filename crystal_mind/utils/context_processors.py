import json


def jsonuser(request):
    """
    A context processor to inject user data into all views.
    """
    if request.user.is_authenticated:
        user_data = {
            'username': request.user.username,
            'email': request.user.email,
            # Add more fields as needed
        }
    else:
        user_data = None

    return {
        'jsonuser': json.dumps(user_data),
        'appIsAuthenticated': json.dumps(request.user.is_authenticated),
        'appCsrftoken': request.COOKIES.get('csrftoken', ''),
    }