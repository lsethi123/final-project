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

class Tour < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :destination
  belongs_to :provider, {foreign_key: :user_id, class_name: "User"}
  has_many :bookings
  has_many :images, as: :imageable, dependent: :destroy
  has_many :reviews, dependent: :destroy

end
