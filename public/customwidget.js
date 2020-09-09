
  var emotionsArray = ['angry','disappointed','meh', 'happy', 'inLove'];
  var options = {
    emotionSize: 30,
    bgEmotion: 'happy',
    emotions: emotionsArray,
    color: '#FF0066', //the color must be expressed with a css code
	  initialRating: 1, //initialize the rating number
	  disabled: false, //set if the rating can be changed or not, default is false
  }
  var widget = {
    name: "emotionrating",
    title: "Bar rating",
    iconName: "icon-emotionrating",
    widgetIsLoaded: function() {
      return !!$.fn.emotionsRating;
    },
    defaultJSON: options,
    isFit: function(question) {
      return question.getType() === "emotionrating";
    },
    // isDefaultRender: true,
    isDefaultRender: false,
    //You should use it if your set the isDefaultRender to false
    htmlTemplate: "<div></div>",
    activatedByChanged: function (activatedBy) {
        //we do not need to check acticatedBy parameter, since we will use our widget for customType only
        //We are creating a new class and derived it from text question type. It means that text model (properties and fuctions) will be available to us
        Survey.JsonObject.metaData.addClass("emotionrating", [], null, "dropdown");
    },
    afterRender: function(question, el) {
        //var $el = $(el).is("select") ? $(el) : $(el).find("select"); 
        var $el = $(el);
        $el.emotionsRating(options);
    }};

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");