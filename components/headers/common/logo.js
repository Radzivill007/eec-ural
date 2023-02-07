import React, { Fragment } from "react";
import Link from "next/link";

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <a>
          <img
            // src="/assets/images/icon/logo/logo.svg"
            src={`${logo ? logo : "/assets/images/icon/logo/logo.png"}`}
            alt="logo"
            className="img-fluid"
          />
        </a>
      </Link>
    </Fragment>
  );
};

export default LogoImage;
