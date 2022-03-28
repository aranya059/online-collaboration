class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :post_title, null: false, default: ''
      t.string :code, null: false, default: ''
      t.string :post_visibility_status, null: false, default: "All"
      t.integer :post_status, null: false, default: 1
      t.references :creator, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
