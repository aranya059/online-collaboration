class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  scope :active_list, -> { where(active: true) }
end
