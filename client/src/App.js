
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
function App() {
  const [currentaccount, setCurrentaccount] = useState();
  useEffect(() => {
    load();
  }, [currentaccount])
  useEffect(async () => {
    await window.ethereum.on('accountsChanged', function (accounts) {
      connect()
      window.location.reload();
    });
  }, [])
  function load() {
    connect();
  }
  async function connect() {
    try {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentaccount(accounts[0]);
    }
    catch (err) {
      console.log(err.message)
    }
  }
  return (
    <h2>Hello: {currentaccount ? currentaccount : <span>Please connect using metamask</span>}</h2>

  );
}

export default App;
