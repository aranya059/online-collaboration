class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :code, null: false, default: ''
      t.string :name, null: false, default: ''
      t.timestamps
    end
  end
end
