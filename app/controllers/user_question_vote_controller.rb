class UserQuestionVoteController < ApplicationController
  before_action :set_user_question_vote, only: %i[ show edit update destroy]

  def question_up_vote
    @question = Question.find(params[:user_question_vote_id])
    if UserQuestionVote.find_by_question_id(@question.id) and UserQuestionVote.find_by_creator_id(current_user.id)
      @user_question_vote = UserQuestionVote.find_by(question_id: @question.id, creator_id: current_user.id)
      @user_question_vote.question_creator_id = @question.creator_id
      if @user_question_vote.up_vote.eql?(true)
        @user_question_vote.down_vote = false
        @user_question_vote.save
        redirect_to question_path(params[:user_question_vote_id]),
                    notice: 'You have already given up vote to this question'
      elsif @user_question_vote.down_vote.eql?(true)
        @user_question_vote.up_vote = true
        @user_question_vote.down_vote = false
        @user_question_vote.save
        @question.up_vote+=1
        @question.down_vote-=1
        @question.save
        redirect_to question_path(params[:user_question_vote_id]),
                    notice: 'Up vote given successfully'
      end
    else
      @user_question_vote = current_user.created_user_question_vote.new(user_question_vote_params)
      @user_question_vote.question_id = params[:user_question_vote_id]
      @user_question_vote.creator_id = params[:creator_id]
      @user_question_vote.question_creator_id = @question.creator_id
      @user_question_vote.up_vote = true
      @user_question_vote.down_vote = false
      @user_question_vote.save
      @question.up_vote+=1
      @question.save
      redirect_to question_path(params[:user_question_vote_id]),
                  notice: 'Up vote given successfully'
    end
  end

  def question_down_vote
    @question = Question.find(params[:user_question_vote_id])
    if UserQuestionVote.find_by_question_id(@question.id) and UserQuestionVote.find_by_creator_id(current_user.id)
      @user_question_vote= UserQuestionVote.find_by(question_id: @question.id, creator_id: current_user.id)
      @user_question_vote.question_creator_id = @question.creator_id
      if @user_question_vote.down_vote.eql?(true)
        @user_question_vote.up_vote = false
        @user_question_vote.save
        redirect_to question_path(params[:user_question_vote_id]),
                    notice: 'You have already given down vote to this question'
      elsif @user_question_vote.up_vote.eql?(true)
        @user_question_vote.down_vote = true
        @user_question_vote.up_vote = false
        @user_question_vote.save
        @question.down_vote+=1
        @question.up_vote-=1
        @question.save
        redirect_to question_path(params[:user_question_vote_id]),
                    notice: 'Down vote given successfully'
      end
    else
      @user_question_vote = current_user.created_user_question_vote.new(user_question_vote_params)
      @user_question_vote.question_id = params[:user_question_vote_id]
      @user_question_vote.creator_id = params[:creator_id]
      @user_question_vote.question_creator_id = @question.creator_id
      @user_question_vote.down_vote = true
      @user_question_vote.up_vote = false
      @user_question_vote.save
      @question.down_vote+=1
      @question.save
      redirect_to question_path(params[:user_question_vote_id]),
                  notice: 'Down vote given successfully'
    end
  end

  private

  def set_user_question_vote
    @user_question_vote = UserQuestionVote.find(params[:id])
  end

  def user_question_vote_params
    params.require(:user_question_vote).permit(:question_id,
                                              :creator_id)
  end
end
