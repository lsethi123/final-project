### Phase 4: Tours belong to providers (1 day)
User story - Users see the tour provide during search.

I will use the same user model to implement a tour provider class.
At first, tour operator's won't be able
to sign up - they will simply be displayed on the tour show page, with more information
accessible on their provider show page.

## Rails
### Models
* User (user model already exists, I will now use users of type PROVIDER) and add photo association
for profile.

### Controllers

### Views
* api/users/show.json.jbuilder - modify to fetch user's photo

## Backbone
### Models
* Provider

### Collections

### Views
* ProviderView - Shows the complete profile for each provider
* ProviderSubView - A snippet to be shown on each tour page.

## Gems/Libraries
