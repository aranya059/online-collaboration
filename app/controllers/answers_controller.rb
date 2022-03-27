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

  def destroy
    begin
      question_id = @answer.question_id
      if @answer.destroy
        redirect_to question_path(question_id),
                    notice: 'Answer is deleted successfully.'
      end
    rescue StandardError => e
      redirect_to fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
    end
  end

  def accept_unaccepted_answer
    @answer = Answer.find(params[:answer_id])
    question_id = @answer.question_id
    @question = Question.find(question_id)
    if @answer.accept_status.eql?(true)
      @answer.accept_status = false
      @answer.save
    else
      @question.answers.each do |answer|
        if answer.accept_status.eql?(true)
          answer.accept_status = false
          answer.save
          break
        end
      end
      @answer.accept_status = true
      @answer.save
    end
    if @answer.accept_status.eql?(true)
      notice_message = 'Answer is accepted successfully.'
    else
      notice_message = 'Answer accepted status is removed successfully.'
    end
    redirect_to question_path(question_id),
                notice: notice_message
  end
  
  private
  def set_answer
    @answer = Answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:answer_text,
                                   :question_id)
  end
end
