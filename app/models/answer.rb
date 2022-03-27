class Answer < ApplicationRecord
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  belongs_to :question, class_name: 'Question', foreign_key: :question_id
  validates :answer_text, presence: true
  scope :accept_answers, -> { where(accept_status: true) }
end
