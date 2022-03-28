class UserQuestionVote < ApplicationRecord
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  belongs_to :question, class_name: 'Question', foreign_key: :question_id
  scope :up_votes, -> { where(up_vote: true) }
  scope :down_votes, -> { where(down_vote: true) }
end
