import React,{useEffect} from "react";
import {Message} from "semantic-ui-react"


const ThankyouPage = () => {
    // useEffect(()=>{
    //     window.parent.postMessage(
    //         JSON.stringify({
    //             type: "survey-submit",
    //             message: "survey response completed"
    //         }), document.referrer
    //     );
    // })
    return (
        <>
            <div style={{ margin: "auto" }}>
                <Message
                    header='Thank You'
                    content='We have received your response'
                />
            </div>
        </>
    )
}

export default ThankyouPage;
