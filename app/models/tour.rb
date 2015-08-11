class Tour < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :destination
  
end
