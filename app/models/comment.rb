class Comment < ApplicationRecord
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  belongs_to :post, class_name: 'Post', foreign_key: :post_id
  has_rich_text :comment_description
end
