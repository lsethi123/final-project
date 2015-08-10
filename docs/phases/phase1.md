# Phase 1: Tour search and display - A (~1-2 days)
User Story:
Users can search for locations, app displays list of tours for that location.
Users select a tour, app displays more information.

I will implement the tour and location model in both Rails and Backbone. Rails will have a basic
CRUD API that serves tour data under an API namespace.
The homepage will have a dynamic search for locations.
I will create a Backbone composite view for each location, with subviews for all the tours.

[Details][phase-one]

## Rails
### Models
* Location
* Tour

### Controllers
* API::Destination Controller (show)
* API::TourController (index, show, new, create, edit, update, destroy)

### Views
* api/destinations/show.json.jbuilder (Fetches a destination + snippets of info for its tours)
* api/tours/show.json.jbuilder (Fetches all tour information)

## Backbone
### Models
* Destination
* Tour

### Collections
* Destinations
* Tours

### Views
* Home (contains a search subView)
* Search - a searchbox that dynamically updates while you type (used in both home and headerbar))
* Destination (compositeView of many TourSubViews)
* TourSubView (snippet of Tour used by DestinationShow)
* Tour (complete view of tour including information to book)

## Gems/Libraries
* AppAcademy CompositeView
