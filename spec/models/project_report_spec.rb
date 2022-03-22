require 'rails_helper'

RSpec.describe ProjectReport, type: :model do

  before(:all) do
    user = build(:user)
    company = build(:company)
    representative = build(:representative, company: company)
    project = build(:project, creator: user)    
    @project_report = build(
      :project_report,
      company: company,
      representative: representative,
      project: project,
      creator: user
    )
  end
  
  context 'associations' do
    it { should belong_to(:company) }
    it { should belong_to(:representative) }
    it { should belong_to(:project) }
    it { should belong_to(:creator).class_name('User') }
  end

  context 'creation' do
    
    it 'expects a project report to be created' do
      @project_report.save!
      expect(ProjectReport.where(title: 'Test Project')).to be_present
    end
  end

end
