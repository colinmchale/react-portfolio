import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const styles = {
  fontColor: {
    color: "#031927",
  },
  linkColor: {
    color: "#F96900",
  },
};

function Icons() {
  return (
    <div style={{ position: "fixed", bottom: 70 }}>
      <ul
        className="list-unstyled d-flex"
        style={{ flexDirection: "column", marginLeft: 15 }}
      >
        <li>
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/colin-mchale-26a091139/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ color: "#F96900", fontSize: "40px" }} />
          </a>
        </li>
        <li>
          <a
            className="text-muted"
            href="https://github.com/colinmchale"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare style={{ color: "#F96900", fontSize: "40px" }} />
          </a>
        </li>
        <li>
          <a
            className="text-muted"
            href="https://www.facebook.com/colin.mchale.10/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare style={{ color: "#F96900", fontSize: "40px" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Icons;
