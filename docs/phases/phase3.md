# Phase 3: User signup, login and bookings (1-2 days)
User stories:
Users sign up, login, and logout.
Signed in users can request tours.
Signed in users can view their booked tours and cancel them.
Users who aren't signed in are redirected if they try to book tours.

I will implement user signup and login, by hand to demonstrate what
we learned in class.
I will add a booking model in Rails and API to create and destroy(cancel) bookings.
I will add the option to book a tour on the TourShowPage and
I will redirect users who aren't logged in before allowing changes.
I will seed the database with demo users and tours, some of the demo user's tours will
already be confirmed (step after requested) for demo purposes.

## Rails
### Models
* User
* Booking

### Controllers
UsersController (new, create)
SessionsController (new, create, destroy)
API::BookingsController (create, update) (update will be used to approve and cancel)
API::UsersController (show)

### Views
* users/new.html.erb
* sessions/new.html.erb
* api/bookings/show.json.jbuilder (Fetch all the current user's booking data)
* api/users/show.json.jbuilder (Fetches current users' profile data & profile photo)

## Backbone
### Models
* Booking

### Collections
* Bookings

### Views
* UserProfile (shows user info)
* BookingsView (compositeView, shows all a user's bookings)
* BookingSubView (shows info for just one booking)

## Gems/Libraries
* BCrypt
