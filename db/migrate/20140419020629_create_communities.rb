class CreateCommunities < ActiveRecord::Migration
  def change
    create_table :communities do |t|
    t.string :community_board
    t.string :email
    end
  end
end
