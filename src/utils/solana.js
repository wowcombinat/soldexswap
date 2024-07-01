import { Connection, PublicKey } from '@solana/web3.js';

export const getConnection = () => {
  return new Connection(process.env.REACT_APP_SOLANA_RPC_URL);
};

export const swapTokens = async (fromToken, toToken, amount, wallet) => {
  // Здесь будет реализована логика свапа токенов
  // Это потребует интеграции с AMM (Automated Market Maker) на Solana
  console.log('Swapping tokens', { fromToken, toToken, amount, wallet });
  // Возвращаем заглушку для демонстрации
  return { success: true, txId: 'sample_tx_id' };
};
