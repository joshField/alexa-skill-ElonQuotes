//TODO: periods come out as "dot", separate concatenated strings

"use strict";
var Alexa = require("alexa-sdk");
const data = [
  'When something is important enough, you do it even if the odds are not in your favor.',
  'Some people don\'t like change, but you need to embrace change if the alternative is disaster.',
  'Failure is an option here. If things are not failing, you are not innovating enough.',
  'The path to the CEO\'s office should not be through the CFO\'s office, and it should not be through the marketing department.'+'It needs to be through engineering and design.',
  'Persistence is very important. You should not give up unless you are forced to give up.',
  'I think it\'s very important to have a feedback loop, where you\'re constantly thinking about what you\'ve done and how you could be doing it better.',
  'There\'s a tremendous bias against taking risks. Everyone is trying to optimize their ass-covering.',
  'It\'s OK to have your eggs in one basket as long as you control what happens to that basket.',
  'Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind.'+ 'But brand is simply a collective impression some have about a product.',
  'I don\'t think it\'s a good idea to plan to sell a company.'
  ];

var handlers = {

  //Intent Request "ask"
  "LaunchRequest": function () {
      this.emit('ElonQuoteIntent');
   },

   'ElonQuoteIntent': function() {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = randomFact;
//        this.response.cardRenderer("Elon Quotes", randomFact);  //creates a card on the alexa app
        this.response.speak(speechOutput);
        this.emit(':responseReady');
   },

   'AMAZON.HelpIntent': function () {
        this.response.speak('You can tell me an Elon Quote, or you can say exit... What can I help you with?').listen('What can I help you with?');
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
