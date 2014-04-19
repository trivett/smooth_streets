ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.perform_deliveries = true
ActionMailer::Base.raise_delivery_errors = true

ActionMailer::Base.smtp_settings = {  
  :address              => "smtp.mailgun.org",
  :port                 => 587,  
  :domain               => "mailgun.org",  
  :user_name            => "postmaster@sandbox7faf12111e7e441597def2664bbd21d9.mailgun.org",  
  :password             => "34s7h4ei2x34",  
  :authentication       => "plain",  
  :enable_starttls_auto => true  
} 
ActionMailer::Base.default_url_options[:host] = "localhost:3000"