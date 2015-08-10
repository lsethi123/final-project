# Phase 3: User signup, login and bookings (1-2 days)

## Rails
### Models
* User
* Booking

### Controllers
* UsersController (new, create)
* SessionsController (new, create, destroy)
* API::BookingsController (create, update) (update will be used to approve and cancel)
* API::UsersController (show)

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
