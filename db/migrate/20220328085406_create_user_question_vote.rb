class CreateUserQuestionVote < ActiveRecord::Migration[6.1]
  def change
    create_table :user_question_votes do |t|
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.boolean :up_vote,  default: false
      t.boolean :down_vote,  default: false
      t.integer :question_creator_id,  default: ""
      t.references :question, index: true, foreign_key: { to_table: :questions }
      t.timestamps
    end
  end
end
