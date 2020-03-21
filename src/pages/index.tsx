import React from "react";
import Hero from "containers/Hero";
import HowItWorks from "containers/HowItWorks";
import Share from "containers/Share";
import About from "containers/About";

const Index = (): JSX.Element => {
    return (
        <>
            <Hero />
            <HowItWorks/>
            <Share />
            <About/>
        </>
    );
};

export default Index;
