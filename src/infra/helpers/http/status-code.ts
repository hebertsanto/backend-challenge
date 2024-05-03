import HttpStatusCode from 'http-status-codes';

export const HttpStatus = {
  Ok: HttpStatusCode.OK,
  BadRequest: HttpStatusCode.BAD_REQUEST,
  Create: HttpStatusCode.CREATED,
  NotFound: HttpStatusCode.NOT_FOUND,
  Unauthorized: HttpStatusCode.UNAUTHORIZED,
  Conflict: HttpStatusCode.CONFLICT,
  InternalSeverError: HttpStatusCode.INTERNAL_SERVER_ERROR,
};
