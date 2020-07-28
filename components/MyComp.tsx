import * as React from 'react'
interface WelcomeProps {
 name: string,
}
export const MyComp: React.FC<WelcomeProps> = (props) => {
 return <h1>Hello11, {props.name}</h1>;
}

