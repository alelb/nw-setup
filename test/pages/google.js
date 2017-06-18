var conf = require('../../nightwatch.conf.js');

module.exports = {  
  'Demo test Google' : function (client, done) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#rso > div > div > div:nth-child(1) > div > div > h3 > a',
        'Rembrandt - Wikipedia')
      .saveScreenshot(conf.imgpath(client) + '.png')
      .end();      
  }
};
