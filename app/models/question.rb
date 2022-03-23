class Question < ApplicationRecord
  has_rich_text :additional_description
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  after_create :set_code
  validates :question_title, length: { maximum: 250 }, presence: true
  def set_code
    update(code: "QUE-#{id}")
  end
end
