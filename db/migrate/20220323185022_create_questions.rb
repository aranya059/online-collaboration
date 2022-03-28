class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question_title, null: false, default: ''
      t.string :code, null: false, default: ''
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
