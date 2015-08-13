class AddUsersPriceToTours < ActiveRecord::Migration
  def change
    add_column :tours, :user_id, :integer, null: false
    add_column :tours, :price, :integer, null: false
    add_index :tours, :user_id
  end
end
