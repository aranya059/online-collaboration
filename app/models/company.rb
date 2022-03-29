class Company < ApplicationRecord
  has_rich_text :additional_description
  after_create :set_code
  validates :name, length: { maximum: 250 }, presence: true
  def set_code
    update(code: "COM-#{id}")
  end

  def total_admins
    User.where(company_id: id, role: 2).count
  end

  def total_moderators
    User.where(company_id: id, role: 1).count
  end

  def total_employees
    User.where(company_id: id, role: 0).count
  end

  def total
    User.where(company_id: id).count
  end
end
