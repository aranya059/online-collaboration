class AddVisibilityToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :visibility_status, :integer, default: 1
  end
end
