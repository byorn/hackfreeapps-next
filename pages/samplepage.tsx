import * as React from 'react';

interface IProps{
    name: string;
}

const SamplePage: React.FC<IProps> = (IProps)=>{
    return <div>Hello World This os Sample Page</div>
}
export default SamplePage;