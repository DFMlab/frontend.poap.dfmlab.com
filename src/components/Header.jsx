import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper py-4 px-5 shadow-xss">
        <div className="row">
          <div className="col-lg-12 navbar pt-0 pb-0">
            <a href="/">
              <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                DFMlab{" "}
                <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                  POAP Minter{" "}
                </span>
              </h1>
            </a>
            <button className="btn btn-primary">Connect </button>
          </div>
      </div>
    </div>
  );
};

export default Header;
