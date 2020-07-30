import React from "react";
import {Message} from "semantic-ui-react"


const ThankyouPage = () => {
    return (
        <>
            <div style={{ margin: "auto" }}>
                <Message
                    header='Thankyou'
                    content='We have recived your response'
                />
            </div>
        </>
    )
}

export default ThankyouPage;
