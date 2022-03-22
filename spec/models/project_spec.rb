require 'rails_helper'

RSpec.describe Project, type: :model do
  context 'associations' do
    it { should have_many(:project_users).dependent(:destroy) }
  end
end
