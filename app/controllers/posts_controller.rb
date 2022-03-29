class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]
  before_action :index_breadcrumb, only: %i[index new create edit update show]
  before_action :check_ownership, only: %i[edit update destroy]

  def index
    respond_to do |format|
      format.html
      format.json { render json: PostDatatable.new(view_context, current_user) }
    end
  end

  def show
    @comment = Comment.new
    @comments = @post.comments.all.order(created_at: :desc)
    add_breadcrumb 'Post Details'
  end

  def new
    @post = Post.new
    add_breadcrumb 'New Post'
  end

  def edit
    add_breadcrumb 'Edit Post'
  end

  def create
    @post = Post.new(post_params)

    @post = current_user.created_posts.new(post_params)
    if @post.save
      redirect_to posts_path,
                  notice: 'Post is created successfully'
    else
      render :new
    end
  end

  def update
    if @post.update(post_params)
      redirect_to posts_path,
                  notice: 'Post is updated successfully'
    else
      render :edit
    end
  end

  def destroy
    begin
      if @post.destroy
        redirect_to posts_path,
                    notice: 'Post is destroyed successfully.'
      end
    rescue StandardError => e
      redirect_to fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
    end
  end

  def index_breadcrumb
    add_breadcrumb 'Posts', posts_path
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:post_title,
                                        :post_visibility_status,
                                        :post_additional_description)
    end

  def check_ownership
    begin
      if current_user.is_admin.eql?(true) || current_user.id.eql?(@post.creator_id)
        true
      else
        redirect_back fallback_location: root_path,
                      flash: { error: 'You are not eligible to make this change' }
      end
    rescue StandardError => e
      redirect_back fallback_location: root_path,
                    flash: { error: invalid_id_error_message(e) }
    end
  end
end
