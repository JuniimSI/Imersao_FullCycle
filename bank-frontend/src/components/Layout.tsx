// @flow
import * as React from "react";
import Footer from "./Footer";
import { MainContent } from "./MainContent";
import { Navbar } from "./Navbar";

const Layout: React.FunctionComponent = (props) => {

    return (
        <div>
            <Navbar />
            <MainContent> {props.children}</MainContent>
            <Footer />
        </div>
    );
};

export default Layout;