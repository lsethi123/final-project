class CreateLocations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :name, null: false
    end
  end
end
