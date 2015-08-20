class AddFieldsToBooking < ActiveRecord::Migration
  def change
    add_column :bookings, :num_people, :integer, null: false
  end
end
