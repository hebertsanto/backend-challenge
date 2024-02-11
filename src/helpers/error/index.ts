export class MissingParamError extends Error {
  constructor(param: string) {
    super(`missing parameter ${param}`);
  }
}
export class ParamDoesNotExist extends Error {
  constructor(param: string) {
    super(`this ${param} does not exist`);
  }
}
