import React from "react";
import Hero from "containers/Hero";
import HowItWorks from "containers/HowItWorks";
import Share from "containers/Share";
import About from "containers/About";
import SEO from "components/SEO";

const Index = (): JSX.Element => {
    return (
        <>
            <SEO title={"Home"}/>
            <Hero />
            <HowItWorks/>
            <Share />
            <About/>
        </>
    );
};

export default Index;
