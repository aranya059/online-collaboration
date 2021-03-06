class Question < ApplicationRecord
  has_rich_text :additional_description
  has_many :answers, dependent: :destroy
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  after_create :set_code
  validates :question_title, length: { maximum: 250 }, presence: true
  def set_code
    update(code: "QUE-#{id}")
  end
  QUESTION_VISIBILITY_STATUS = %w[Colleagues Everyone]
end
