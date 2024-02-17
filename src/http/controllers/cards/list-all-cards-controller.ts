import { Request, Response } from 'express';
import { ZodError, z } from 'zod';
import htmlPdf from 'html-pdf-node';
import { TCard } from '../../../helpers/types';
import { makeCardUseCase } from '../../../use-cases/factories/card';

/**
 *listAllCardsController
 * @param { Request } req request object express
 * @param { Response } res response object express
 * @returns { Promise<TCard>} Promise to be resolved
 */
export const listAllCardsController = async (
  req: Request,
  res: Response,
): Promise<TCard | unknown> => {

  const makeListAllCards = await makeCardUseCase();
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const cards = await makeListAllCards.listAllCards(id);

    let templateHtml = '';

    cards.forEach((card) => {
      templateHtml += `
       <h3>conta : ${card.id_account}</h3>
      `;
      card.trasations.forEach((transaction) => {
        templateHtml += `
         <table style="text-align:left;">
          <thead>
           <th>
            ID TRANSAÇÃO
           </th>
           <th>
           TRANSAÇÃO
          </th>
           <th>
           VALOR
          </th>
          </thead>
          <tbody>
           <tr>
            <td style="text-align:left;">
              ${transaction.id}
            </td>
            <td style="text-align:left;">
             Netflix
          </td>
            <td style="text-align:left;">
            ${transaction.ammout}
            </td>
           </tr>
          </tbody>
         </table>
        `;
      });
    });

    const options = { format: 'A4' };
    const template = {
      content: `
    <body>
    <h1>DADOS DA SUA CONTA.</h1>
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
