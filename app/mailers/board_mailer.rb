class BoardMailer < ActionMailer::Base
  default from: "smoothestreets@gmail.com"

  def email_community_board(pothole)
    @board = 'jay.kaye31@gmail.com'
    @pothole = pothole
    mail(to: @board, subject: 'Pot Hole Suckas')
  end
end


