class AnswersController < ApplicationController
  before_action :set_answer, only: %i[ show edit update destroy ]
  
  def add_answer
    @answer = current_user.created_answers.new(answer_params)
    @answer.question_id = params[:question_id]
    @answer.save
    if @answer.save
      redirect_to question_path(params[:question_id]),
                  notice: "Answer is added successfully"
    else
      redirect_to question_path(params[:question_id])
    end
  end

  def edit
    add_breadcrumb 'Edit Answer'
  end

  def update
    if @answer.update(answer_params)
      redirect_to question_path,
                  notice: 'Answer is updated successfully'
    else
      render :edit
    end
  end
  
  private
  def set_answer
    @answer = answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:answer_text,
                                   :question_id)
  end
end
