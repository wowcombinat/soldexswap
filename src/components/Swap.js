import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import TokenSelector from './TokenSelector';

function Swap() {
  const { publicKey } = useWallet();
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [amount, setAmount] = useState('');

  const handleSwap = () => {
    // Здесь будет логика свапа
    console.log('Swap', { fromToken, toToken, amount });
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
