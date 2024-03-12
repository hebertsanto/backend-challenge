# Desafio backend

## contexto.

recentemente vi um repositório aqui no github e decidi replicar para ter no portifólio,
o desafio era pra ser feito em golang, porém resolvi fazer em node.

## funcionalidades.

#### conta

- [x] criar uma conta.

#### cartões

- [x] adicionar/criar cartões.
- [x] listar cartões.
- [x] listar somente um cartão.

#### transações

- [x] fazer uma transação.
- [x] listar transações.
- [x] listar somente uma transação.
- [x] gerar um pdf com dados de UMA transação.
- [x] gerar um pdf com dados da conta E todas as transações de uma conta.

## relacionamentos

#### uma conta pode ter muitos cartões,ou seja, uma relação de um para muitos.

#### um cartão pode ter muitas transações, ou seja, uma relação de um para muitos.

#### um cartão pode fazer muitas transações, ou seja, uma relação de um para muitos.

## tecnologias ultilizadas nesse projeto

- Node js
- Typescript
- Express
- Zod
- Postgres
- Prisma
- Commitlint
- Husky
- Railway
- Prettier
- Eslint
- Git
- Github
- html-pdf-node
- Docker

## abaixo estão as tabela

![Texto alternativo](https://raw.githubusercontent.com/devconductor/desafio-golang/master/img/diagrama.png)

## endpoints da api

### account

- **POST** `/account` cria uma nova conta.

### transactions

- **POST** `/transaction` cria uma nova transação.
- **GET** `/transaction` pega todas as transações relacionado a um cartão.
- **GET** `/transaction/:id` pega uma transação específica.
- **GET** `/transaction/:id/file` gera um arquivo pdf com os dados da transação

### card

- **POST** `/card` cria um novo cartão.
- **GET** `/card` pega todos os cartões relacionados a uma conta.
- **GET** `/card/:id` pega um cartão específco.
- **GET** `/card/:id/file` pega informações da conta e todas as transações

### na resposta da rota `/card/:id/file`

#### será retornado um arquivo PDF neste formato :

![account](https://github.com/hebertsanto/challange-backend/assets/108555424/6c86cc71-fd64-4614-b43a-ccf4e3a59d3e)
