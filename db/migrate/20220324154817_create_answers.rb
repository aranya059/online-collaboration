class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.text :answer_text, null: false
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.references :question, index: true, foreign_key: { to_table: :questions }
      t.integer :up_vote, null: false, default: 0
      t.integer :down_vote, null: false, default: 0
      t.boolean :accept_status, null: false, default: false
      t.timestamps
    end
  end
end
