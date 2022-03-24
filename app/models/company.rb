class Company < ApplicationRecord
  has_rich_text :additional_description
  after_create :set_code
  validates :name, length: { maximum: 250 }, presence: true
  def set_code
    update(code: "COM-#{id}")
  end
end
