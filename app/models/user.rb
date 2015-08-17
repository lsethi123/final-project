# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  has_many :bookings
  has_many :tours, dependent: :destroy
  has_one :image, as: :imageable

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(user_params)
    @user = User.find_by_username(user_params[:username])
    if @user && @user.is_password?(user_params[:password])
      @user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    # TA: Since this is a utility method that doesn't depend on instance state,
    # I would make it a class method.
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
  end

  def to_json
    "{'username:' #{self.username}, 'id:' #{self.id} }"
  end
end
