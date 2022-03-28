class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :omniauthable, omniauth_providers: %i[azure_activedirectory_v2]

  belongs_to :company
  has_one_attached :image
  has_many :created_questions, class_name: 'Question', foreign_key: :creator_id, dependent: :destroy
  has_many :created_posts, class_name: 'Post', foreign_key: :creator_id, dependent: :destroy
  has_many :created_answers, class_name: 'Answer', foreign_key: :creator_id, dependent: :destroy
  has_many :created_user_comment_vote, class_name: 'UserCommentVote', foreign_key: :creator_id, dependent: :destroy
  has_many :created_user_question_vote, class_name: 'UserQuestionVote', foreign_key: :creator_id, dependent: :destroy

  validates :email,
            presence: true,
            uniqueness: true,
            length: { maximum: 250 },
            format: { with: URI::MailTo::EMAIL_REGEXP }

  validates_confirmation_of :password
  validates :first_name, presence:true, length: { maximum: 250 }
  validates :last_name, presence:true, length: { maximum: 250 }
  validates :phone_number, presence:true, length: { maximum: 250 }

  validates :image,
            presence: true,
            content_type: %w[image/jpg image/jpeg image/png],
            size: { less_than: 4.megabytes,
                    message: 'upload limit is 4 MB attachment' }


  MALE = 0
  FEMALE = 1
  OTHER = 2

  enum gender: {
    Male: MALE,
    Female: FEMALE,
    Other: OTHER
  }

  EMPLOYEE = 0
  MODERATOR = 1
  ADMIN = 2

  enum role: {
    Employee: EMPLOYEE,
    Moderator: MODERATOR,
    Admin: ADMIN
  }

  def displayed_image(version='original')
    if image.attached?
      if version.eql? 'avatar'
        image.variant(resize: '100x100')
      else
        image
      end
    else
      ActionController::Base.helpers.asset_pack_path('media/images/profile.png')
    end
  end

  def total_asked_question
    Question.where(creator_id: id).count
  end

  def total_given_answer
    Answer.where(creator_id: id).count
  end

  def total_accepted_answer
    Answer.accept_answers.where(creator_id: id).count
  end

  def own_question_accepted_answer
    @answers = Answer.accept_answers.where(creator_id: id)
    questions_ids = @answers.pluck(:question_id)
    Question.where(id: questions_ids, creator_id: id).count
  end

  def total_question_up_vote
    total_up_vote = 0
    Question.where(creator_id: id).each do |question|
      total_up_vote += question.up_vote
    end
    total_up_vote
  end

  def total_question_down_vote
    total_down_vote = 0
    Question.where(creator_id: id).each do |question|
      total_down_vote += question.down_vote
    end
    total_down_vote
  end

  def total_answer_up_vote
    UserCommentVote.up_votes.where(answer_creator_id: id).count
  end

  def total_answer_down_vote
    UserCommentVote.down_votes.where(answer_creator_id: id).count
  end

  def total_score
    (total_accepted_answer - own_question_accepted_answer)*10 + total_question_up_vote + total_answer_up_vote - total_question_down_vote - total_answer_down_vote
  end

  def full_name
    full_name = ''
    full_name += first_name if first_name.present?
    full_name += ' ' if full_name.present?
    full_name += last_name if last_name.present?
    full_name += email.split('@')[0] unless full_name.present?
    full_name
  end
end
