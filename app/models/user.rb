class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :omniauthable, omniauth_providers: %i[azure_activedirectory_v2]

  has_one_attached :image
  has_one_attached :signature

  validates :email,
            presence: true,
            uniqueness: true,
            length: { maximum: 250 },
            format: { with: URI::MailTo::EMAIL_REGEXP }

  validates_confirmation_of :password
  validates :first_name, presence:true, length: { maximum: 250 }
  validates :last_name, presence:true, length: { maximum: 250 }
  validates :phone_number, presence:true, length: { maximum: 250 }

  validates :image,
            presence: true,
            content_type: %w[image/jpg image/jpeg image/png],
            size: { less_than: 4.megabytes,
                    message: 'upload limit is 4 MB attachment' }

  validates :signature,
            content_type: %w[image/jpg image/jpeg image/png],
            size: { less_than: 4.megabytes,
                    message: 'upload limit is 4 MB attachment' }

  MALE = 0
  FEMALE = 1
  OTHER = 2

  enum gender: {
    Male: MALE,
    Female: FEMALE,
    Other: OTHER
  }

  GENERAL = 0
  MICROSOFT = 1

  enum authentication_type: {
    General: 0,
    Microsoft: 1
  }

  def displayed_image(version='original')
    if image.attached?
      if version.eql? 'avatar'
        image.variant(resize: '100x100')
      else
        image
      end
    else
      ActionController::Base.helpers.asset_pack_path('media/images/profile.png')
    end
  end


  def get_signature
    return signature if signature.attached?

    ActionController::Base.helpers.asset_pack_path('media/images/white_bg.png')
  end

  def signed_with_microsoft?
    self.authentication_type.eql?(User.authentication_types.keys.last)
  end

  def full_name
    full_name = ''
    full_name += first_name if first_name.present?
    full_name += ' ' if full_name.present?
    full_name += last_name if last_name.present?
    full_name += email.split('@')[0] unless full_name.present?
    full_name
  end


end
