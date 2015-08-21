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
  STATUSES = ["requested", "approved", "cancelled", "denied"]
  validates :tour, :user, presence: true
  validates :status, inclusion: { in: STATUSES }

  belongs_to :tour
  has_one :provider, through: :tour, source: :provider
  belongs_to :user
end
