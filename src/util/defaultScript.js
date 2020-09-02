var defaultScript = {
    custommCSS: {
        mainColor: "#6A5FF1",
        mainHoverColor: "#6A5FF1",
        textColor: "#6A5FF1",
        headerColor: "#6A5FF1",
        headerBackgroundColor: "#2895EC",
        bodyContainerBackgroundColor: "white"
    },
    surveyScript: {
        title: "Eteva Job Portal",
        description: "Please complete following survey",
        logo: "https://etevaconsulting.com/assets/img/logos/etevalogo.png",
        logoWidth: 60,
        logoHeight: 60,
        completedHtml: "<h1>Thank you for your response</h1>",
        questions: [
            { type: "text", name: "employeeName", title: "What is your name?", isRequired: true },
            {
                type: "text", name: "email", title: "What is your email", isRequired: true, validators: [
                    {
                        type: "email"
                    }
                ]
            },
            { type: "text", inputType: "date", name: "dateOFBirth", title: "What is your date of birth", isRequired: true },
            {
                type: "text",
                name: "Range",
                inputType: "range",
                min: "35",
                max: "75"
               },
            {
                type: "radiogroup",
                name: "experience",
                title: "Do you Have any Previous experience? ",
                isRequired: true,
                colCount: 2,
                choices: [
                    "No",
                    "Yes",

                ]
            }, {
                type: "dropdown",
                name: "yearsOfExp",
                title: "How much years of experience do you have?",
                visibleIf: "{experience}='Yes'",
                isRequired: true,
                choices: [1, 2, 3, 4, 5]
            }, {
                type: "radiogroup",
                name: "isTechnical",
                title: "Do you Have any Programing experience? ",
                isRequired: true,
                colCount: 2,
                choices: [
                    "No",
                    "Yes",

                ]
            }, {
                type: "checkbox",
                name: "programingLanguage",
                title: "What programming languages are you familiar with?",
                isRequired: true,
                visibleIf: "{isTechnical}='Yes'",
                colCount: 2,
                choices: [
                    "JavaScript",
                    "C#",
                    "Python",
                    "C++",
                    "Java",
                    "Dart",
                    "others"
                ]
            },
            {
                type: "matrix",
                name: "Quality",
                title: "How will you rate yourself in following",
                columns: [
                    {
                        value: 1,
                        text: "Strong"
                    }, {
                        value: 2,
                        text: "Average"
                    }, {
                        value: 3,
                        text: "Weak"
                    }
                ],
                rows: [
                    {
                        value: "OOPs",
                        text: "Object oriented Programing"
                    }, {
                        value: "restArchicture",
                        text: "REST API "
                    },
                    {
                        value: "azureDevOps",
                        text: "Azure"
                    },
                ]
            }

        ]
    }
};

export default defaultScript;