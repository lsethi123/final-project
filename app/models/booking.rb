# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  tour_id    :integer          not null
#  user_id    :integer          not null
#  tour_date  :datetime         not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ActiveRecord::Base
  # STATUSES = ["requested", "confirmed", "cancelled"]
  validates :tour, :user, presence: true
  # validates :status, inclusion: { in: STATUSES }

  belongs_to :tour
  belongs_to :user
end
