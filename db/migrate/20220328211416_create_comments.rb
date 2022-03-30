class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.references :post, index: true, foreign_key: { to_table: :posts }
      t.timestamps
    end
  end
end
