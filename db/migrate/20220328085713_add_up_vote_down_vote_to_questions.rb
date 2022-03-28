class AddUpVoteDownVoteToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :up_vote, :integer, default: 0
    add_column :questions, :down_vote, :integer, default: 0
  end
end
