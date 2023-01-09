import express from 'express';
import {
    createAccountController,
    findAccountController,
    loadMoneyController,
    withdrawMoneyController,
} from '../controllers/account.controller';

const router = express.Router();

router.post('/', createAccountController);
router.get('/:accountId', findAccountController);
router.put('/:accountId/load', loadMoneyController);
router.put('/:accountId/withdraw', withdrawMoneyController);

export default router;
