class PostDatatable < ApplicationDatatable
  delegate :post_path, to: :@view
  delegate :edit_post_path, to: :@view

  private

  def data
    posts.map do |post|
      [].tap do |column|
        column << @serials[post.id]
        column << sanitize_text(post.code)
        column << sanitize_text(post.post_title)
        column << sanitize_text(post.creator.full_name)
        column << show_datetime(post.created_at.localtime)
        column << show_datetime(post.updated_at.localtime)

        links = []

        links << link_to("<i class='mdi mdi-eye-outline mr-2 text-brand font-23'></i>".html_safe,
                         post_path(post),
                         title: 'Show')
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(post.creator_id)
                   link_to("<i class='mdi mdi-square-edit-outline text-brand mr-2 font-23'></i>".html_safe,
                           edit_post_path(post),
                           title: 'Edit')
                 end
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(post.creator_id)
                   link_to("<i class='mdi mdi-delete mr-2 text-brand font-23'></i>".html_safe,
                           post_path(post),
                           title: 'Delete',
                           method: :delete,
                           data: {confirm: 'Are you sure you want to delete it?'})
                 end
        column << links.join('')
      end
    end
  end

  def count
    Post.count
  end

  def total_entries
    posts.count
  end

  def posts
    @posts ||= fetch_posts
  end

  def fetch_posts
    search_string = []

    columns.each do |term|
      search_string << "#{term} like :search"
    end

    @posts = Post.all
    # if @current_user.is_admin.eql?(true)
    #   @posts = Post.all
    # else
    #   colleagues_ids = []
    #   Post.all.where(visibility_status: Post::COLLEAGUES).each do |post|
    #     if User.find_by_id(post.creator_id).company_id.eql?(User.find_by_id(@current_user.id).company_id)
    #       colleagues_ids << post.creator_id
    #     end
    #   end
    #   visibility_everyone_post_ids = Post.where(visibility_status: Post::EVERYONE).pluck(:id)
    #   colleagues_post_ids = Post.where(visibility_status: Post::COLLEAGUES, creator_id: colleagues_ids).pluck(:id)
    #   post_ids = visibility_everyone_post_ids + colleagues_post_ids
    #   @posts = Post.all.where(id: post_ids)
    # end
    @serials = {}

    post_ids = @posts.pluck(:id)
    post_ids&.sort.each_with_index do |id, sl|
      @serials[id] = sl + 1
    end

    posts = @posts.except(:order).joins(:creator).includes([:creator]).order("#{sort_column} #{sort_direction}")
    posts = posts.page(page).per_page(per_page)
    posts.where(search_string.join(' or '), search: "%#{squish_text(params[:search][:value])}%")
  end

  def columns
    %w[posts.id posts.code posts.post_title users.email posts.created_at posts.updated_at]
  end
end
