import React from 'react';

const mockTokens = [
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'RAY', name: 'Raydium' },
];

function TokenSelector({ label, selectedToken, onSelectToken }) {
  return (
    <div className="token-selector">
      <label>{label}</label>
      <select
        value={selectedToken ? selectedToken.symbol : ''}
        onChange={(e) => {
          const token = mockTokens.find(t => t.symbol === e.target.value);
          onSelectToken(token);
        }}
      >
        <option value="">Select a token</option>
        {mockTokens.map((token) => (
          <option key={token.symbol} value={token.symbol}>
            {token.name} ({token.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}

export default TokenSelector;
