FactoryBot.define do
  factory :company do

    after(:build, :create) do |company|
      company.logo.attach(
        io: File.open(Rails.root.join("app/assets/images/logo.png")),
        filename: 'logo.png',
        content_type: 'image/png'
      )
    end
  end
end
