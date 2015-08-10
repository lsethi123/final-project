# Phase 2: Tour search and display with Photos ( ~1 day)
During search and display, Users can see photos for each tour.

I will add photos to the app using the Paperclip gem and AWS for production. Photos will
be a polymorphic association. In this phase, photos will only belong to
tours, but I will implement a polymorphic association to allow flexibility
to allow users to have profile photos later.

## Rails
### Models
Photo

### Controllers
API::PhotosController (new, create, destroy)

### Views
* api/destinations/show.json.jbuilder (modify to fetch photos associated with tours)
* api/tours/show.json.jbuilder (modify to fetch photos on tour show page)

## Backbone
### Models

### Collections

### Views
* TourSubView (modify to show Photos)
* Tour (modify to show Photos)

## Gems/Libraries
* Paperclip
* Imagemagick
* AWS
