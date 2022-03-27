class CreateUserCommentVote < ActiveRecord::Migration[6.1]
  def change
    create_table :user_comment_votes do |t|
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.boolean :up_vote,  default: false
      t.boolean :down_vote,  default: false
      t.references :answer, index: true, foreign_key: { to_table: :answers }
      t.timestamps
    end
  end
end
