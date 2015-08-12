class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :tour_id, null: false;
      t.integer :user_id, null: false;
      t.timestamp :tour_date, null: false;
      t.string :status, null: false

      t.timestamps null: false
    end

    add_index :bookings, :user_id
    add_index :bookings, :tour_id
  end
end
