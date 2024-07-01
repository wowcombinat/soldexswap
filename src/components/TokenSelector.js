import React from 'react';

const tokens = [
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'RAY', name: 'Raydium' },
  // Добавьте больше токенов по мере необходимости
];

function TokenSelector({ label, selectedToken, onSelectToken }) {
  return (
    <div className="token-selector">
      <label>{label}</label>
      <select
        value={selectedToken ? selectedToken.symbol : ''}
        onChange={(e) => {
          const token = tokens.find(t => t.symbol === e.target.value);
          onSelectToken(token);
        }}
      >
        <option value="">Select a token</option>
        {tokens.map((token) => (
          <option key={token.symbol} value={token.symbol}>
            {token.symbol} - {token.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TokenSelector;
