import { Connection, PublicKey } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

export async function getTokenBalance(connection, walletAddress, tokenMintAddress) {
  const token = new Token(
    connection,
    new PublicKey(tokenMintAddress),
    TOKEN_PROGRAM_ID,
    null
  );

  const tokenAccount = await token.getOrCreateAssociatedAccountInfo(
    new PublicKey(walletAddress)
  );

  const balance = await token.getAccountInfo(tokenAccount.address);
  return balance.amount.toNumber() / Math.pow(10, balance.decimals);
}

export async function performSwap(connection, wallet, fromToken, toToken, amount) {
  // Здесь будет реализована логика свапа
  // Это сложная операция, которая требует взаимодействия с смарт-контрактами DEX
  // и может включать в себя создание инструкций, подписание транзакций и т.д.
  console.log('Performing swap', { fromToken, toToken, amount });
  // Пример: 
  // 1. Получить котировки
  // 2. Создать инструкцию для свапа
  // 3. Отправить и подтвердить транзакцию
}
