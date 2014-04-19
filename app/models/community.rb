class Community < ActiveRecord::Base
  has_many :potholes
  validates :email, presence: true
  validates :community_board, presence: true
end