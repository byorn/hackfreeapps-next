import React, { ReactElement } from 'react'
import { Alert } from 'react-bootstrap'

interface Props {
    isError: boolean,
    text:string
}

export default function CommentAlert(props: Props): ReactElement {
    return (
        <>
            {props.isError? <Alert variant={"danger"}>{props.text}</Alert>:<Alert variant={"primary"}>{props.text}</Alert>}
        </>
    )
}


