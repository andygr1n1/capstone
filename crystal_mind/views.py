import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse
from .models import User, Task
from django.db.models import Q
from .helpers import makeTasks, makeUsers
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, "index.html")


def login_view(request):
    if request.method == "POST":
        form = json.loads(request.body)
        username = form["username"]
        password = form["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return JsonResponse({"status": "success"})
        else:
            return JsonResponse({"status": "error", "message": "Invalid username and/or password."})
    else:
        return render(request, "login.html")


def logout_view(request):
    logout(request)
    return JsonResponse({"status": "success"})


def register(request):
    if request.method == "POST":
        form = json.loads(request.body)
        username = form["username"]
        email = form["email"]
        password = form["password"]
        confirmation = form["confirmation"]
        
        if password != confirmation:
            return JsonResponse({"status": "error", "message": "Passwords must match."})

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return JsonResponse({"status": "error", "message": "Name or email already taken."})
        login(request, user)
        return JsonResponse({"status": "success"}) 
    else:
        return render(request, "register.html")
    

def tasks(request, page=1):
    if not request.user.is_authenticated:
        return redirect('index')
    tasks = makeTasks(request, page)
    print('HERE!!!!!')
    users = makeUsers(request) 
    return render(request, "tasks.html", {"tasks_json": tasks["json"], "num_pages": tasks["num_pages"], "current_page": tasks["current_page"], "users_json": users["json"]})



# js
def selectedTasks(request, page):
    tasks = makeTasks(request, page)
    return JsonResponse({
        "tasks":tasks['json'],
        "num_pages": tasks["num_pages"],
        "current_page": tasks["current_page"]
    })

def createTask(request):
    print('createTask',request.user, request)
    if request.method == "POST":
        form = json.loads(request.body)
        task = Task(
            title=form["title"],
            description=form["description"],
            location=form.get("location"), 
            deadline=form["deadline"],
            created_by=request.user
        )
        task.save()
        
        if "users" in form:
            task.users.set(form["users"])
        
        related_users = [request.user.id] + form["users"] if "users" in form else [request.user.id]
        print('related_users IN VIEW', related_users)
        # Notify WebSocket group
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "tasks",
            {
                "type": "tasks_refresh",
                "related_users": json.dumps(related_users)
            }
        )

        return JsonResponse({"status": "success"})
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method."})

def tasksSubscription(request):
    pass

# def closed_listings(request):
#     listings = AuctionListing.objects.filter(is_active=False)
#     return render(request, "crystal_mind/closed_listings.html", {
#         "listings": listings,
#     })


# def watchlist(request):
#     watchlist = Watchlist.objects.filter(user=request.user)
#     listings = AuctionListing.objects.filter(id__in=[watchlist_item.listing.id for watchlist_item in watchlist])
#     return render(request, "crystal_mind/watchlist.html", {
#         "listings": listings
#     })

# def categories(request):
#     categories = Category.objects.all()
#     return render(request, "crystal_mind/categories.html", {
#         "categories": categories
#     })

# def category(request, category_id):
#     category = Category.objects.get(id=category_id)
#     if not category.name == "Other":
#         listings = AuctionListing.objects.filter(category=category, is_active=True)
#     else:
#         listings = AuctionListing.objects.filter(Q(category=None) | Q(category=category), is_active=True)
#     return render(request, "crystal_mind/category.html", {
#         "category": category,
#         "listings": listings
#     })

# def add_listing(request):
#     if request.method == "POST":
#         title = request.POST["title"]
#         description = request.POST["description"]
#         starting_bid = request.POST["starting_bid"]
#         image_url = request.POST["image_url"]
#         category = Category.objects.get(id=request.POST["category"]) if request.POST["category"] else None
#         owner = User.objects.get(id=request.user.id)
#         listing = AuctionListing(title=title, description=description, image_url=image_url, category=category, owner=owner)
#         listing.save()
#         new_bid = Bid(owner=request.user, amount=starting_bid, listing=listing)
#         new_bid.save()
#         listing.bids.add(new_bid)
#         return HttpResponseRedirect(reverse("index"))
#     else:
#         categories = Category.objects.all()
#         return render(request, "crystal_mind/add_listing.html", {
#             "categories": categories
#         })

# def listing(request, listing_id):
#     if request.method == "POST":
#         action = request.POST.get("action")
#         bid = request.POST.get("bid_amount")
#         comment = request.POST.get("comment")
#         close_auction = request.POST.get("close-auction")

#         listing = AuctionListing.objects.get(id=listing_id)

#         if action == "add":
#             Watchlist.objects.create(user=request.user, listing=listing)
#         if action == "remove":
#             Watchlist.objects.filter(user=request.user, listing=listing).delete()
#         if bid:
#             first_bid = listing.bids.first().amount if listing.bids.first() else 0
#             last_bid_amount = listing.bids.last().amount if listing.bids.last() else 0
#             if float(bid) < float(last_bid_amount) or float(bid) < float(first_bid):
#                 return render(request, "auctions/listing.html", {
#                         "listing": listing,
#                         "is_watchlist": Watchlist.objects.filter(user=request.user, listing=listing).exists(),
#                         "message": "Bid amount must be higher than the current bid and starting bid."
#                     })
#             new_bid = Bid(owner=request.user, amount=bid, listing=listing)
#             new_bid.save()
#             listing.bids.add(new_bid)
#         if comment:
#             Comment.objects.create(user=request.user, listing=listing, content=comment)
#         if close_auction:
#             listing.is_active = False
#             listing.save()
#         return HttpResponseRedirect(reverse("listing", args=[listing_id]))
#     else:
#         listing = AuctionListing.objects.get(id=listing_id)
#         is_watchlist = Watchlist.objects.filter(user=request.user, listing=listing).exists() if request.user.is_authenticated else False
#         return render(request, "auctions/listing.html", {
#         "listing": listing,
#         "is_watchlist": is_watchlist,
#         "bids": Bid.objects.filter(listing=listing),
#         "comments": Comment.objects.filter(listing=listing).order_by('-created_at')
#     })

# def edit_listing(request, listing_id):
#     listing = AuctionListing.objects.get(id=listing_id)
#     if request.method == "POST":
#         listing.description = request.POST["description"]
#         listing.image_url = request.POST["image_url"]
#         listing.category = Category.objects.get(id=request.POST["category"]) if request.POST["category"] else None
#         listing.save()
#         return HttpResponseRedirect(reverse("listing", args=[listing_id]))
#     return render(request, "auctions/edit_listing.html", {
#         "listing": listing,
#         "categories": Category.objects.all()
#     })

# def redirect_to_login(request, resource):
#     return HttpResponseRedirect(reverse("index"))