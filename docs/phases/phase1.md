# Phase 1: Tour search and display - A (~1 day)

## Rails
### Models
* Destination
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
* Home/Index (contains a search subView)
* Search - a searchbox that dynamically updates while you type (used in both home and headerbar))
* Destination (compositeView of many TourSubViews)
* TourSubView (snippet of Tour used by DestinationShow)
* Tour (complete view of tour including information to book)

## Gems/Libraries
* AppAcademy CompositeView
