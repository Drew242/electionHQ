class PollyVote
  include HTTParty

  def forecast
    response = HTTParty.get('//pollyvote.com/wp-content/plugins/pollyvote/data/index.php?time=current')
    response['data'][0]
  end

end
