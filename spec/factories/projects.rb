FactoryBot.define do

  factory :project do
    title { 'Test Project' }
    creator { association :user }
    description { 'Sample Description' }
    code { 'OC101' }
  end

end
