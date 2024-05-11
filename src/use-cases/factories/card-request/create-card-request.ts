import { CreateCardRequest } from '../../card-request/create-request';
import { DbCreateCardRequest } from '../../../adpaters/repositories/prisma/card-request/db-card-request';
import { DbGetAccountById } from '../../../adpaters/repositories/prisma/account/db-find-account-by-id';

export default async function createCardRequestFactory() {
  const cardRequestsRepository = new DbCreateCardRequest();
  const accountRepository = new DbGetAccountById();
  const createCardRequestService = new CreateCardRequest(
    cardRequestsRepository,
    accountRepository,
  );
  return createCardRequestService;
}
