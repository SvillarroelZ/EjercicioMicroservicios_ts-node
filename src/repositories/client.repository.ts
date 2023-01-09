import Client from '../models/client.model';

export default class ClientRepository {

    static async findAll() {
        try {
            return await Client.find();
        } catch (error) {
            throw error;
        }
    }

    static getItems(clientData: any) {
        return Client.find({});
    }
    static async create(clientData: any) {
        const client = new Client(clientData);
        return client.save();
    }

    static async findById(id: string) {
        return Client.findById(id);
    }

    static async update(id: string, clientData: any) {
        return Client.findByIdAndUpdate(id, clientData, { new: true });
    }

    static async delete(id: string) {
        return Client.findByIdAndDelete(id);
    }
}
