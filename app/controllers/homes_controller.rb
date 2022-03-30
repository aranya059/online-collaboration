class HomesController < ApplicationController
  def index
    @top_questions = Question.order(up_vote: :desc).limit(5)
    @top_up_voted_questions = Question.where(created_at: (Date.today - 7.days)..Date.today).order(up_vote: :desc).limit(5)
    @top_contributors = User.all.sort_by(&:total_score).reverse
    @top_companies = Company.all.sort_by(&:total).reverse
  end
end
