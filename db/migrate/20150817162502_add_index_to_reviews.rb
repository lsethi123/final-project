class AddIndexToReviews < ActiveRecord::Migration
  def change
    add_index :reviews, :user_id
    add_index :reviews, :tour_id
  end
end
