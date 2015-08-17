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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
