FactoryBot.define do

  factory :user do
    email { 'user@nascenia.com' }
    first_name { 'Test' }
    last_name { 'User' }
    phone_number { '01712345678' }
    gender { 'Male' }
    password { 'password' }

    after(:build, :crete) do |user|
      user.image.attach(
        io: File.open(Rails.root.join("app/assets/images/profile.png")), 
        filename: 'profile.png',
        content_type: 'image/png'
      )
    end

  end

end
