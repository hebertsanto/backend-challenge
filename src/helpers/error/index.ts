export class MissingParamError extends Error {
  constructor(param: string) {
    super(`missing parameter ${param}`);
  }
}
export class NotFoundResource extends Error {
  constructor(param: string) {
    super(`this ${param} does not exist`);
  }
}

export class ResourseAlreadyExist extends Error {
  constructor(param: string) {
    super(`this ${param} already exist`);
  }
}
