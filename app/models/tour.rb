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
#

class Tour < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :destination
  has_many :bookings

end
