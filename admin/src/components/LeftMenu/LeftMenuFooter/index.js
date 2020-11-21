import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        <a
          key="website"
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Won Games 🎮
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
