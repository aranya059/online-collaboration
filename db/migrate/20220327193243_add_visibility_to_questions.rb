class AddVisibilityToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :visibility_status, :string, default: "Everyone"
  end
end
