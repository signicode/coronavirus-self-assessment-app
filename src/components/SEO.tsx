import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

type SEOProps = {
    title: string
}
const SEO = (props: SEOProps) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title} | How you feel, World?</title>
    </Helmet>
);
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO
