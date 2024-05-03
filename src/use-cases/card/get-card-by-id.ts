import { Card } from '@prisma/client';
import { DbGetCardById } from '../../adpaters/repositories/prisma/cards/db-get-card-by-id';
import { GetCardByIdRepository } from '../../adpaters/repositories/db/card/get-card-by-id-repository';
import { MissingParamError, NotFoundResource } from '../../infra/helpers/error';

export class GetCardByIdUseCase implements GetCardByIdRepository {
  constructor(private getCardByIdRepository: DbGetCardById) {}
  async findById(card_id: string): Promise<Card | null> {
    if (!card_id) throw new MissingParamError('card_id');

    const card = await this.getCardByIdRepository.findById(card_id);

    if (!card) throw new NotFoundResource('card');
    return card;
  }
}
