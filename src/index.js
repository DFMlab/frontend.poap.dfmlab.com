import React from 'react';
import ReactDOM from 'react-dom';
import {
    ContractKitProvider,
    Alfajores,
    NetworkNames,
} from '@celo-tools/use-contractkit';
import App from './App';
import "@celo-tools/use-contractkit/lib/styles.css";

ReactDOM.render(
    <React.StrictMode>
        <ContractKitProvider
            networks={[Alfajores]}
            network={{
                name: NetworkNames.Alfajores,
                rpcUrl: 'https://alfajores-forno.celo-testnet.org',
                graphQl: 'https://alfajores-blockscout.celo-testnet.org/graphiql',
        explorer: 'https://alfajores-blockscout.celo-testnet.org',
        chainId: 44787,
      }}
      dapp={{
        name: 'DFMlab POAP.',
        description: 'A POAP minter dApp from DFMlab.',
        url: 'https://poap.dfmlab.com',
      }}
    >
      <App />
    </ContractKitProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);