class CreatePotholes < ActiveRecord::Migration
  def change
    create_table :potholes do |t|
      t.integer :unique_key
      t.string :created_at_date
      t.integer :zipcode
      t.string :address
      t.string :community_board
      t.float :latitude
      t.float :longitude
      t.string :community_id
    end
  end
end
