# Tryable

[Heroku link][heroku]

[heroku]: http://tryable.herokuapp.com

## Minimum Viable Product
It is a peer-to-peer tour booking site that allows people to find off-the-beaten track
experiences from around the world, inspired by vayable.com. The site will be built on
Backbone on Rails, with Bootstrap and custom CSS for styling.

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in and out)
- [ ] Search for destinations
- [ ] View destinations and tours
- [ ] Book and cancel tours
- [ ] Review tours

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

# Phase 1: Location search, and tour display (~1 day)
User Story:
Users can search for locations, app displays list of tours for that location.
Users select a tour, app displays more information.

I will implement the tour and location model in both Rails and Backbone. Rails will have a basic
CRUD API that serves tour data under an API namespace.
The homepage will have a dynamic search for locations.
I will create a Backbone composite view for each location, with subviews for all the tours.

[Details][phase-one]

### Phase 2: Photos ( ~1 day )
During search and display, Users can see photos for each tour.

I will add photos to the app using the Paperclip gem and AWS for production. Photos will
be a polymorphic association. In this phase, photos will only belong to
tours, but I will implement a polymorphic association to allow flexibility
to allow users to have profile photos later.

## Phase 3: User signup, login and bookings (1 day)
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
[Details][phase-three]

### Phase 4: Tours belong to providers (1 day)
User story - Users see the tour provider during search.

I will use the same user model to implement a tour provider class.
At first, tour operator's won't be able
to sign up - they will simply be displayed on the tour show page, with more information
accessible on their provider show page.
[Details][phase-four]

### Phase 5: User reviews (1 day)
User story - Users leave a numerical feedback and text review for their past tours.

I will implement a review class which has the feedback, rating, and belongs to both a
tour and a user.
[Details][phase-five]

### Phase 6: Pagination, cleanup and deployment (2 days)
I will finish formatting the app with CSS/Bootstrap (in progress the whole way), a Pagination
gem, and implement a demo login, and deployment recommendations:
 -Seed database
-task to cleanout the database regularly and seed with good demo data.
-avoid app shutting down on Heroku(Pingdom or New Relic)
-new domain name

 [Details][phase-six]

 ### Bonus Features: (TBD, in order of priority)

 Tour provider login which allows them to signup, create tours, and approve bookings
 Google maps integration (destination show and tour show pages have googlemaps)
 Tour activity tags and taggings (i.e. outdoors, culinary, history to filter results)
 Social media integration (like tours on Facebook)
 Email notifications upon signup, successful booking, booking cancellation


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
