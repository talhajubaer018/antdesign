import { Affix, Button } from "antd";
import React, { useState } from "react";

const AffixAD = () => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  return (
    <div style={{height: '200vh'}}>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo quasi dolorem, fuga tempore illum dolor soluta officia dolores ratione, at expedita vero id consequatur vitae accusantium facilis doloribus! Mollitia.</p>
      <br />
      <Affix style={{position: 'relative', top: '100%'}} offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </div>
  );
};

export default AffixAD;
