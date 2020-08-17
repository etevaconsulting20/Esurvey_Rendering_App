import React from "react";
import {Message} from "semantic-ui-react"


const ThankyouPage = () => {
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
