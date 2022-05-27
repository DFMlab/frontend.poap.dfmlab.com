import React, {useCallback} from "react";
import { useContractKit } from "@celo-tools/use-contractkit";


const Header = () => {
  const { connect, address, destroy } = useContractKit();

  const connectToWallet = async () => {
    try  { await connect() } catch(e) {console.log(e)}
  }

  const disconnectToWallet = async () => {
    try  { await destroy() } catch(e) {console.log(e)}
  }

  const ConnectButton = () => {
    return <button onClick={() => {connectToWallet()}} className="btn btn-primary">Connect </button>;
  };

  const DisconnectButton = () => {
    return <button onClick={() => {disconnectToWallet()}} className="btn btn-primary">Disconnect </button>;
  };

  return (
    <div id="header" className="header-wrapper py-4 px-5 shadow-xss">
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
          { address ? <DisconnectButton/> : <ConnectButton/> }
        </div>
      </div>
    </div>
  );
};

export default Header;
