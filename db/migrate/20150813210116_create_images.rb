class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.string :thumb_url

      t.timestamps null: false
    end
  end
end
