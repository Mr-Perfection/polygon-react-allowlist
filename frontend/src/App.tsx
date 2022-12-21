import React, { useEffect, useState } from "react";
import { ethers } from 'ethers'

import { Allowlist as AllowListContract } from '../../backend/typechain-types/Allowlist'
import getAllowlistContract from './utils/getAllowlistContract';
import AllowlistForm from './components/AllowlistForm'

function App() {
  const [storageValue, setStorageValue] = useState(0);
  const [allowListContract, setAllowListContract] = useState<AllowListContract | undefined>();
  const [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider | undefined>();
  const [walletAccounts, setWalletAccounts] = useState<string[]>([]);



  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      if (provider) {
        const accounts = await provider.listAccounts();
        if (accounts.length === 0) {
          // Connect the app to Metamask accounts.
          window.ethereum.enable();
        }

        setWeb3Provider(provider);
        setWalletAccounts(accounts);
        // https://mumbai.polygonscan.com/address/0xc115FefcE4607E81BF29AaEE8D47254C00438294#code
        setAllowListContract(getAllowlistContract('0xc115FefcE4607E81BF29AaEE8D47254C00438294'));
      }
    })();
  }, []);

  
    if (!web3Provider) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <AllowlistForm
          contract={allowListContract}
          accounts={walletAccounts}
        />
      </div>
    );
}

export default App
