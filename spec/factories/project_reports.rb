FactoryBot.define do

  factory :project_report do
    title { 'Test Project' }
    company { association :company }
    representative { association :representative }
    project { association :project }
    creator { association :user }
  end

end
