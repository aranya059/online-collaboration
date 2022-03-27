class UserCommentVoteController < ApplicationController
  before_action :set_user_comment_vote, only: %i[ show edit update destroy]

  def answer_up_vote
    @answer = Answer.find(params[:user_comment_vote_id])
    question_id = @answer.question_id
    @question = Question.find(question_id)
    if UserCommentVote.find_by_answer_id(@answer.id) and UserCommentVote.find_by_creator_id(current_user.id)
      @user_comment_vote= UserCommentVote.find_by(answer_id: @answer.id, creator_id: current_user.id)
      if @user_comment_vote.up_vote.eql?(true)
        @user_comment_vote.down_vote = false
        @user_comment_vote.save
        redirect_to question_path(question_id),
                    notice: 'You have already given up vote to this answer'
      elsif @user_comment_vote.down_vote.eql?(true)
        @user_comment_vote.up_vote = true
        @user_comment_vote.down_vote = false
        @user_comment_vote.save
        @answer.up_vote+=1
        @answer.down_vote-=1
        @answer.save
        redirect_to question_path(question_id),
                    notice: 'Up vote given successfully'
      end
    else
      @user_comment_vote = current_user.created_user_comment_vote.new(user_comment_vote_params)
      @user_comment_vote.answer_id = params[:user_comment_vote_id]
      @user_comment_vote.creator_id = params[:creator_id]
      @user_comment_vote.up_vote = true
      @user_comment_vote.down_vote = false
      @user_comment_vote.save
      @answer.up_vote+=1
      @answer.save
      redirect_to question_path(question_id),
                  notice: 'Up vote given successfully'
    end
  end

  def answer_down_vote
    @answer = Answer.find(params[:user_comment_vote_id])
    question_id = @answer.question_id
    @question = Question.find(question_id)
    if UserCommentVote.find_by_answer_id(@answer.id) and UserCommentVote.find_by_creator_id(current_user.id)
      @user_comment_vote= UserCommentVote.find_by(answer_id: @answer.id, creator_id: current_user.id)
      if @user_comment_vote.down_vote.eql?(true)
        @user_comment_vote.up_vote = false
        @user_comment_vote.save
        redirect_to question_path(question_id),
                    notice: 'You have already given down vote to this answer'
      elsif @user_comment_vote.up_vote.eql?(true)
        @user_comment_vote.down_vote = true
        @user_comment_vote.up_vote = false
        @user_comment_vote.save
        @answer.down_vote+=1
        @answer.up_vote-=1
        @answer.save
        redirect_to question_path(question_id),
                    notice: 'Down vote given successfully'
      end
    else
      @user_comment_vote = current_user.created_user_comment_vote.new(user_comment_vote_params)
      @user_comment_vote.answer_id = params[:user_comment_vote_id]
      @user_comment_vote.creator_id = params[:creator_id]
      @user_comment_vote.down_vote = true
      @user_comment_vote.up_vote = false
      @user_comment_vote.save
      @answer.down_vote+=1
      @answer.save
      redirect_to question_path(question_id),
                  notice: 'Down vote given successfully'
    end
  end

  private

  def set_user_comment_vote
    @user_comment_vote = UserCommentVote.find(params[:id])
  end

  def user_comment_vote_params
    params.require(:user_comment_vote).permit(:answer_id,
                                              :creator_id)
  end
end
