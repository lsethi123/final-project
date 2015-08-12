class Booking < ActiveRecord::Base
  # STATUSES = ["requested", "confirmed", "cancelled"]
  validates :tour, :user, presence: true
  # validates :status, inclusion: { in: STATUSES }

  belongs_to :tour
  belongs_to :user
end
