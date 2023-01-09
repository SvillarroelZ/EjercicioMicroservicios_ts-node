import ClientRepository from '../repositories/client.repository';

export default class ClientController {

    // private repository: ClientRepository;

    // constructor() {
    //     this.repository = new ClientRepository();
    // }

    //Obtiene todos los registros de clientes
    static async findAll(req: any, res: any) {
        try {
            const clients = await ClientRepository.findAll();
            return res.status(200).send(clients);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    //Crear un registro
    static async create(req: any, res: any) {
        try {
            const client = await ClientRepository.create(req.body);
            return res.status(201).send(client);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    //Listar registro
    static async findById(req: any, res: any) {
        try {
            const client = await ClientRepository.findById(req.params.id);
            if (!client) return res.status(404).send('Cliente no encontrado');
            return res.status(200).send(client);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    //Actualizar registro
    static async update(req: any, res: any) {
        try {
            const client = await ClientRepository.update(req.params.id, req.body);
            if (!client) return res.status(404).send('Cliente no encontrado');
            return res.status(200).send(client);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    //Eliminar registro
    static async delete(req: any, res: any) {
        try {
            const client = await ClientRepository.delete(req.params.id);
            if (!client) return res.status(404).send('Cliente no encontrado');
            return res.status(200).send(client);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
