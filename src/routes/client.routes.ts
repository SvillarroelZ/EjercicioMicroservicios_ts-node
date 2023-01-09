//http://localhost:3000/clients w/GET, POST, DELETE, PUT
import express from 'express';
import ClientController from '../controllers/client.controller';

const router = express.Router();

router.get('/clients', ClientController.findAll);

router.post('/', ClientController.create);
router.get('/:id', ClientController.findById);
router.put('/:id', ClientController.update);
router.delete('/:id', ClientController.delete);

export default router;
// module.exports = router;
