class UserCommentVote < ApplicationRecord
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  belongs_to :answer, class_name: 'Answer', foreign_key: :answer_id
end
