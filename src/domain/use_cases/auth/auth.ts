
export interface MakeAuth {
  auth(cpf: string, password: string): Promise<string>;
}
