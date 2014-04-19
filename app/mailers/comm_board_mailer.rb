class CommBoardMailer < ActionMailer::Base
  default from: "smoothestreets@gmail.com'

  def email_community_board
    @comm_board = 'jay.kaye31@gmail.com'
    # @user = user
    mail(to: @comm_board, subject: 'Pot Hole Suckas')
  end
end



