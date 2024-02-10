import { Request, Response } from 'express';
import { ListCardsUseCase } from '../../../use-cases/card/list-all-cards-use-case';
import { ZodError, z } from 'zod';
import htmlPdf from 'html-pdf-node';

export const listAllCardsController = async (req: Request, res: Response) => {
  const listAllCardsUseCase = new ListCardsUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const cards = await listAllCardsUseCase.listAllCards(id);

    let templateHtml = '';

    cards.forEach((card) => {
      templateHtml += `
      <p>conta ${card.id_account}</p>
      `;
    });


    cards.forEach((card) => {
      card.trasations.forEach((transaction) => {
        templateHtml += `
          <p>valor da transação: ${transaction.ammout}$Reais</p>
        `;
      });
    });

    const options = { format: 'A4' };
    const template = {
      content: `
    <body>
    <h1>dados da sua conta</h1>
    ${templateHtml}
    </body>
    `,
    };

    res.contentType('application/pdf');
    const pdf = await htmlPdf.generatePdf(template, options);
    return res.send(pdf);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.json(400).json({
        msg: 'error validation data',
        error,
      });
    }
  }
};
