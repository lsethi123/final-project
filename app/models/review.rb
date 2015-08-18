# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  description :text
#  user_id     :integer
#  tour_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user, :tour, :rating, presence: true
  belongs_to :user
  belongs_to :tour
end
