import axios from 'axios';
import { Request, Response } from 'express';
import { createAccount, findAccount, loadMoney, withdrawMoney } from '../repositories/account.repository';

export const createAccountController = async (req: Request, res: Response) => {
    try {
        const { ownerId, balance, number } = req.body;

        try {
            // Obtén la información del cliente utilizando Axios
            const { data: owner } = await axios.get(`http://localhost:3000/clients/${ownerId}`);

            const accountData = { owner, balance, number };
            const account = await createAccount(accountData);

            res.send({
                success: true,
                account,
            });
        } catch (error) {
            // Maneja el error al obtener la información del cliente
            res.status(500).send({
                success: false,
                message: 'Error al obtener la información del cliente'
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error al obtener la información del cliente',
        });
    }
};


export const findAccountController = async (req: Request, res: Response) => {
    try {
        const { accountId } = req.params;
        const account = await findAccount(accountId);

        res.send({
            success: true,
            account,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error'
        });
    }
};

export const loadMoneyController = async (req: Request, res: Response) => {
    try {
        const { accountId } = req.params;
        const { amount } = req.body;
        const account = await loadMoney(accountId, amount);

        res.send({
            success: true,
            account,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error'
        });
    }
};

export const withdrawMoneyController = async (req: Request, res: Response) => {
    try {
        const { accountId } = req.params;
        const { amount } = req.body;
        const account = await withdrawMoney(accountId, amount);

        res.send({
            success: true,
            account,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error'
        });
    }
};
