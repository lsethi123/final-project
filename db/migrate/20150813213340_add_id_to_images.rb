class AddIdToImages < ActiveRecord::Migration
  def change
    add_column :images, :imageable_id, :integer
    add_column :images, :imageable_type, :string, null: false
    add_index :images, :imageable_id
  end
end
