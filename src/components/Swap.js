import React, { useState, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import TokenSelector from './TokenSelector';
import { getTokenBalance, performSwap } from '../utils/solana';

function Swap() {
  const { publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (publicKey && fromToken) {
      getTokenBalance(connection, publicKey.toString(), fromToken.mintAddress)
        .then(setBalance)
        .catch(console.error);
    }
  }, [publicKey, fromToken, connection]);

  const handleSwap = async () => {
    if (!publicKey || !signTransaction || !fromToken || !toToken || !amount) return;

    try {
      await performSwap(connection, { publicKey, signTransaction }, fromToken, toToken, amount);
      // Обновить баланс после свапа
      const newBalance = await getTokenBalance(connection, publicKey.toString(), fromToken.mintAddress);
      setBalance(newBalance);
    } catch (error) {
      console.error('Swap failed', error);
    }
  };

  return (
    <div className="swap-container">
      {publicKey ? (
        <>
          <TokenSelector
            label="From"
            selectedToken={fromToken}
            onSelectToken={setFromToken}
          />
          {balance !== null && <p>Balance: {balance} {fromToken?.symbol}</p>}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <TokenSelector
            label="To"
            selectedToken={toToken}
            onSelectToken={setToToken}
          />
          <button onClick={handleSwap} disabled={!fromToken || !toToken || !amount}>
            Swap
          </button>
        </>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
}

export default Swap;
