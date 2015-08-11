class Destination < ActiveRecord::Base
  validates :name, presence: true
  has_many :tours, dependent: :destroy
end
