class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show edit update destroy ]

  def add_comment
    @comment = current_user.created_comments.new(comment_params)
    @comment.post_id = params[:post_id]
    @comment.save
    if @comment.save
      redirect_to post_path(params[:post_id]),
                  notice: "Comment is added successfully"
    else
      redirect_to post_path(params[:post_id])
    end
  end

  def edit
    add_breadcrumb 'Edit Comment'
  end

  def update
    if @comment.update(comment_params)
      redirect_to post_path(@comment.post_id),
                  notice: 'Comment is updated successfully'
    else
      render :edit
    end
  end

  def destroy
    begin
      post_id = @comment.post_id
      if @comment.destroy
        redirect_to post_path(post_id),
                    notice: 'Comment is deleted successfully.'
      end
    rescue StandardError => e
      redirect_to fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
    end
  end


  private
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:post_id,
                                    :comment_description)
  end
end

