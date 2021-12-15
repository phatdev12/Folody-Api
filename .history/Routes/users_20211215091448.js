import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';
import router from '../index.js';



router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);