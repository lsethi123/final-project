# == Schema Information
#
# Table name: destinations
#
#  id   :integer          not null, primary key
#  name :string           not null
#

class Destination < ActiveRecord::Base
  validates :name, presence: true
  has_many :tours, dependent: :destroy
end
