# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  url            :string           not null
#  thumb_url      :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  imageable_id   :integer
#  imageable_type :string           not null
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
