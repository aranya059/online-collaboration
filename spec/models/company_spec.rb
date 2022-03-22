require 'rails_helper'

RSpec.describe Company, type: :model do

  subject { build(:company) }
  
  context 'validations' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :phone_no }
    it { should validate_presence_of :name }
    it { should validate_presence_of :business_registration_number }
    it { should validate_presence_of :address }
    it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
    it { should validate_uniqueness_of(:phone_no).ignoring_case_sensitivity }
  end

  context 'associations' do
    it { should have_many(:representatives).dependent(:destroy) }
  end

  context 'db' do
    context 'columns' do
      it { should have_db_column(:code).of_type(:string) }
      it { should have_db_column(:name).of_type(:string) }
      it { should have_db_column(:client_company).of_type(:boolean) }
      it { should have_db_column(:address).of_type(:text) }
      it { should have_db_column(:business_registration_number).of_type(:string) }
      it { should have_db_column(:phone_no).of_type(:string) }
      it { should have_db_column(:fax_no).of_type(:string) }
      it { should have_db_column(:email).of_type(:string) }
      it { should have_db_column(:active).of_type(:boolean) }
    end
  end 

  context 'creation' do
    
    it 'expects the crated company to be present' do
      subject.save!
      expect(Company.find_by_email('contact@online-collaboration.com')).to be_present
    end

    it 'expects company name to be saved correctly' do
      subject.save!
      expect(Company.find_by_email('contact@online-collaboration.com').name).to eq 'Online collaboration'
    end

  end

  context 'set_code method' do
    
    it 'sets a unique code for the company' do
      subject.save!
      company = Company.find_by_email('contact@online-collaboration.com')
      code = "COMP-#{company.id}"
      expect(company.code).to eq code
    end
    
  end

end
