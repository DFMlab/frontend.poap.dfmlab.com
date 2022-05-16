import React from 'react';
import { useContractKit } from "@celo-tools/use-contractkit";

const Header = () => {

    const { connect, address } = useContractKit();

    function ConnectButton() {
        return (
            address ? 
            (<button onClick={connect} className="btn btn-primary">connect</button>) :
            (<button className="btn btn-primary">disconnect</button>)
        )
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">Navbar</a>
            {   ConnectButton()   }
        </nav>
    );
}


export default Header