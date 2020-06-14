import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transctionRepository = getCustomRepository(TransactionRepository);

    const transaction = await transctionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transctionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
