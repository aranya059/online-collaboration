# frozen_string_literal: true
require 'csv'

if Company.all.count.eql?0
  path = File.join(File.dirname(__FILE__), 'company_data.json')

  s1 = File.read(path)
  company_data = JSON.parse(s1)

  company_data.each do |value|
    Company.create!(
        code: value['company_code'],
        name: value['company_name'],
    )
  end
end

puts "#{Company.count} company added"

