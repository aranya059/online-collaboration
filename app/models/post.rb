class Post < ApplicationRecord
  has_rich_text :post_additional_description
  # has_many :comments, dependent: :destroy
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  after_create :set_code
  validates :post_title, length: { maximum: 250 }, presence: true
  def set_code
    update(code: "BLOG-#{id}")
  end

  POST_VISIBILITY = ["All", "All Employee", "Admins", "Employees"]

  DRAFTED = 1
  PUBLISHED = 2
  ARCHIVED = 3

  enum status: {
    Drafted: DRAFTED,
    Published: PUBLISHED,
    Archived: ARCHIVED
  }
end
