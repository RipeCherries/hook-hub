import React from 'react';

import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";

interface Props {
    children: any;
}

const Layout: React.FC<Props> = (props: Props) => {
    return (
        <>
            <GlobalStyles/>
            <Header aboba="life" />
            {props.children}
        </>
    )
}

export default Layout;