
import validator from '@/middleware/validator';
import TicketService from '@/services/ticket';
import translate from '@/services/translate';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_get, async (req, res) => {
  const ticket = await TicketService
    .getInstance()
    .get(req.body['identifier']);

  if(ticket) return res.json(ticket);

  return res.sendStatus(400);
})

router.get('/list', async (req, res) => {
  const rangeResult = await TicketService
    .getInstance()
    .range(
      parseInt(req.query.page as string),
      parseInt(req.query.per as string)
    );

  if(rangeResult) return res.json(
    translate.parseTicketRangeResult(rangeResult)
  );

  return res.sendStatus(400);
})

/**
 * @todo Search
 */

router.get('/search', async (req, res) => {

  return res.sendStatus(200);
})

export default router;