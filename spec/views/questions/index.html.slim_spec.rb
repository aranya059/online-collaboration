require 'rails_helper'

RSpec.describe "questions/index", type: :view do
  before(:each) do
    assign(:questions, [
      Question.create!(
        question_title: "Question Title"
      ),
      Question.create!(
        question_title: "Question Title"
      )
    ])
  end

  it "renders a list of questions" do
    render
    assert_select "tr>td", text: "Question Title".to_s, count: 2
  end
end
