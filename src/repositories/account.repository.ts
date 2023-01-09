import Account from '../models/account.model';

interface IAccount {
    owner: string;
    balance: number;
    number: number;
    }

export const createAccount = async (accountData: IAccount) => {
    const account = new Account(accountData);
    return account.save();
};

export const findAccount = async (accountId: string) => {
    return Account.findById(accountId).exec();
};

export const loadMoney = async (accountId: string, amount: number) => {
    return Account.findByIdAndUpdate(
        accountId,
        { $inc: { balance: amount } },
        { new: true },
    ).exec();
};

export const withdrawMoney = async (accountId: string, amount: number) => {
    return Account.findByIdAndUpdate(
        accountId,
        { $inc: { balance: -amount } },
        { new: true },
    ).exec();
};
