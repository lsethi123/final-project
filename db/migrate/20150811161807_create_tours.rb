class CreateTours < ActiveRecord::Migration
  def change
    create_table :tours do |t|
      t.string :title, null: false
      t.text :description
      t.integer :destination_id, null: false
      t.timestamps null: false
    end

    add_foreign_key :tours, :destinations
  end
end
