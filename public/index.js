var json = {
    elements: [
        {
            type: "textwithbutton",
            name: "q1",
            placeHolder: "put some text here",
            buttonText: "Custom button text"

        },
        {
            type: "emotionsratings",
            name: "emotionsratings-widget",
            title: "Please rate the movie you've just watched",
            choices: ["1", "2", "3", "4", "5"]
        },
     //     {
            // type: "emotionrating",
            // name: "question1",
            // choices: [
            // {
            // value: 1,
            // text: "Text 1"
            // },
            // {
            // value: 2,
            // text: "Text 2"
            // },
            // {
            // value: 3,
            // text: "Text 3"
            // }
            // ]
     // }
    ]
};


var survey = new Survey.Model(json);
//survey.data = { q1: "Initial text" };

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
