# == Schema Information
#
# Table name: tours
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :text
#  destination_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer          not null
#  price          :integer          not null
#

require 'test_helper'

class TourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
