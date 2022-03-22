require 'rails_helper'

RSpec.describe User, type: :model do

  subject { build(:user) }

  context 'creation' do
  
    it 'allows account creation through naive registration process' do
      subject.save!
      expect(User.find_by_email('user@nascenia.com')).to be_present
    end
  
  end

  context 'validation' do

    it 'checks presence of required attributes' do
      expect(subject).to be_valid
    end

    it 'does not validate without email' do
      subject.email = nil
      expect(subject).to_not be_valid
    end

    it 'does not validate without first name' do
      subject.first_name = nil
      expect(subject).to_not be_valid
    end

    it 'does not validate without last name' do
      subject.last_name = nil
      expect(subject).to_not be_valid
    end

    it 'does not validate without phone number' do
      subject.phone_number = nil
      expect(subject).to_not be_valid
    end

    it 'does not validate without image' do
      subject.image = nil
      expect(subject).to_not be_valid
    end

    it 'does not allow invalid or blank email pattern' do
      subject.email = ''
      expect(subject).to_not be_valid
      subject.email = 'invalidemailid@'
      expect(subject).to_not be_valid
    end
  
  end

  context 'full_name method' do

    it 'returns full name of a user' do
      expect(subject.full_name).to eq 'Test User'
    end
  
  end

  context 'associations' do
    it { should have_many(:project_users).dependent(:destroy) }
    it { should have_many(:projects) }
    it { should have_many(:created_projects).dependent(:destroy) }
    it { should have_many(:created_project_reports).dependent(:destroy) }
  end

end
