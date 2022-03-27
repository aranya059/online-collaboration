class QuestionDatatable < ApplicationDatatable
  delegate :question_path, to: :@view
  delegate :edit_question_path, to: :@view

  private

  def data
    questions.map do |question|
      [].tap do |column|
        column << @serials[question.id]
        column << sanitize_text(question.code)
        column << sanitize_text(question.question_title)
        column << sanitize_text(question.creator.full_name)
        column << show_datetime(question.created_at.localtime)
        column << show_datetime(question.updated_at.localtime)

        links = []

        links << link_to("<i class='mdi mdi-eye-outline mr-2 text-brand font-23'></i>".html_safe,
                         question_path(question),
                         title: 'Show')
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(question.creator_id)
                   link_to("<i class='mdi mdi-square-edit-outline text-brand mr-2 font-23'></i>".html_safe,
                           edit_question_path(question),
                           title: 'Edit')
                 end
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(question.creator_id)
                   link_to("<i class='mdi mdi-delete mr-2 text-brand font-23'></i>".html_safe,
                           question_path(question),
                           title: 'Delete',
                           method: :delete,
                           data: {confirm: 'Are you sure you want to delete it?'})
                 end
        column << links.join('')
      end
    end
  end

  def count
    Question.count
  end

  def total_entries
    questions.count
  end

  def questions
    @questions ||= fetch_questions
  end

  def fetch_questions
    search_string = []

    columns.each do |term|
      search_string << "#{term} like :search"
    end

    if @current_user.is_admin.eql?(true)
      @questions = Question.all
    else
      colleagues_ids = []
      Question.all.where(visibility_status: Question::COLLEAGUES).each do |question|
        puts "@@@"
        puts User.find_by_id(question.creator_id).company_id
        if User.find_by_id(question.creator_id).company_id.eql?(User.find_by_id(@current_user.id).company_id)
          colleagues_ids << question.creator_id
        end
      end
      visibility_everyone_question_ids = Question.where(visibility_status: Question::EVERYONE).pluck(:id)
      colleagues_question_ids = Question.where(visibility_status: Question::COLLEAGUES, creator_id: colleagues_ids).pluck(:id)
      question_ids = visibility_everyone_question_ids + colleagues_question_ids
      @questions = Question.all.where(id: question_ids)
    end
    @serials = {}

    question_ids = @questions.pluck(:id)
    question_ids&.sort.each_with_index do |id, sl|
      @serials[id] = sl + 1
    end

    questions = @questions.except(:order).joins(:creator).includes([:creator]).order("#{sort_column} #{sort_direction}")
    questions = questions.page(page).per_page(per_page)
    questions.where(search_string.join(' or '), search: "%#{squish_text(params[:search][:value])}%")
  end

  def columns
    %w[questions.id questions.code questions.question_title users.email questions.created_at questions.updated_at]
  end
end
