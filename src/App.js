import React, { Component } from 'react';
import Home from './pages/home';


import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";

function App() {
  return (
    <ContractKitProvider
      dapp={{
        name: "DFMLab POAP",
        description: "DFMLAB POAP",
        url: "https://poap.dfmlab.com",
      }}
    >
      <AppData />
    </ContractKitProvider>
  );
}

function AppData() {
  return <Home/>
}

export default App