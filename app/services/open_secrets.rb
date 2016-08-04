class OpenSecrets
  include HTTParty

  def clinton
    response = HTTParty.get('http://www.opensecrets.org/api/?method=candSummary&cid=N00000019&output=json&apikey=92b064b67fcb014d6478866b648adc8b')
    JSON.parse(response)["response"]["summary"]["@attributes"]
  end

  def trump
    response = HTTParty.get('http://www.opensecrets.org/api/?method=candSummary&cid=N00023864&output=json&apikey=92b064b67fcb014d6478866b648adc8b')
    JSON.parse(response)["response"]["summary"]["@attributes"]
  end
end
