# Schema Information

## destination
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## tours
column name | data type | details
------------|-----------|-----------------------
id              | integer   | not null, primary key
destination_id  | integer   | not null
provider_id     | integer   | not null, foreign key (references users)
title           | string    | not null
description     | text      |


## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tour_id     | integer   | not null, foreign key (references tours)
user_id     | integer   | not null, foreign key (references users)
tour_date   | dateTime  | not null
status      | string    |


## photos
column name     | data type | details
----------------|-----------|-----------------------
id                    | integer       | not null, primary key
photoable_class       | string        | not null
photoable_id          | integer       | not null
photo_file_name       | string        | not null
photo_file_size       | content_type  | not null
photo_content_type    | string        | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
type            | string    | not null
about           | text      |

###BONUS DATABASE SCHEMA ITEMS

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | text      |
rating      | integer   | not null
tour_id     | integer   | not null, foreign key (references tours)
user_id     | integer   | not null, foreign key (references users)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tour_type   | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tour_id     | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)
