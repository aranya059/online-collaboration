FactoryBot.define do
  
  factory :representative do
    company { association :company }
    name { 'Test Representative' }
    designation { 'Senior Staff' }

    after(:build, :create) do |representative|
      representative.photo.attach(
        io: File.open(Rails.root.join("app/assets/images/sample-profile-picture.jpg")),
        filename: 'sample-profile-picture.jpg',
        content_type: 'image/jpg'
      )
    end
  end

end
