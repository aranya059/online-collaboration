class Representative < ApplicationRecord
  has_one_attached :photo
  belongs_to :company
  has_rich_text :other_details
  after_create :set_code
  validates :name, length: { maximum: 250 }, presence: true
  validates :designation, length: { maximum: 250 }, presence: true
  validates :photo,
            content_type: %w[image/jpg image/jpeg image/png],
            size: { less_than: 4.megabytes,
                    message: 'upload limit is 4 MB attachment' }
  def set_code
    update(code: "REPR-#{id}")
  end
end
