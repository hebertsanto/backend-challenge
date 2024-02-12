import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';

export class ListCardsUseCase {
  private cardRepository = new PrismaCardsRepository();
  private accountRepository = new PrismaAccountRepository();

  async listAllCards(id: string) {
    const account = await this.accountRepository.findAccountById(id);

    if (!account) {
      throw new ParamDoesNotExist('id_account');
    }
    const cards = await this.cardRepository.listCards(id);

    if (!id) {
      throw new MissingParamError('id');
    }
    return cards;
  }
}
