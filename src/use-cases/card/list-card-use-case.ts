import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';

export class ListCardByIdUseCase {
  private cardsRespository = new PrismaCardsRepository();

  async listCard(id: string) {
    const card = await this.cardsRespository.listCardById(id);
    if (!card) {
      throw new ParamDoesNotExist('card_id');
    }
    if (!id) {
      throw new MissingParamError('card_id');
    }
    return card;
  }
}
