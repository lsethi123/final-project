class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :description
      t.integer :user_id
      t.integer :tour_id

      t.timestamps null: false
    end
  end
end
