class QuestionsController < ApplicationController
  before_action :set_question, only: %i[ show edit update destroy ]
  before_action :index_breadcrumb, only: %i[index new create edit update show]

  def index
    respond_to do |format|
      format.html
      format.json { render json: QuestionDatatable.new(view_context, current_user) }
    end
  end

  def show
    add_breadcrumb 'Question Details'
  end

  def new
    @question = Question.new
    add_breadcrumb 'New Question'
  end

  def edit
    add_breadcrumb 'Edit Question'
  end

  def create
    @question = current_user.created_questions.new(question_params)
    if @question.save
      redirect_to questions_path,
                  notice: 'Question is created successfully'
    else
      render :new
    end
  end

  def update
    if @question.update(question_params)
      redirect_to questions_path,
                  notice: 'Question is updated successfully'
    else
      render :edit
    end
  end

  def destroy
    begin
      if @question.destroy
        redirect_to questions_path,
                    notice: 'Question is destroyed successfully.'
      end
    rescue StandardError => e
      redirect_to fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
    end
  end

  def index_breadcrumb
    add_breadcrumb 'Questions', companies_path
  end
  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:question_title,
                                     :additional_description)
  end
end
