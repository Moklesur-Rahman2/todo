import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    const override = `
    display: block;
    margin: 0 auto;
    top: 40vh;`


    return <BounceLoader color='#BD10E0' css={override} />
};
export default Loading;