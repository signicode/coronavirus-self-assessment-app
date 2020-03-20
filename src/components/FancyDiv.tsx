import React from "react";

// eslint-disable-next-line react/prop-types
const FancyDiv: React.FC = ({ children }) => {
    return <div style={{ border: "1px solid red" }}>{children}</div>;
};
export default FancyDiv;
