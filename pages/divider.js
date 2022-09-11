import React from "react";
import { Divider } from "antd";
import Link from "next/link";

const divider = () => {
  return (
    <div className="container_white">
      <Divider orientation="right" orientationMargin={50}>
        <Link href="/">
          <a className="back-btn">Go Back</a>
        </Link>
      </Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
      <Divider type="vertical">Text</Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
      <Divider orientation="left">Left Text</Divider>
    </div>
  );
};

export default divider;
