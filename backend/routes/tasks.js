import { Router } from 'express';
import { indexView, postAddTask, postUpdateTask, postDeleteTask, getAllTasks } from '../controllers/tasks.js';


const router = Router();

/**GET METHODS */
router.get('/',indexView);
router.get('/tasks',getAllTasks);

/**POST METHODS */
router.post('/task/create',postAddTask);

/**PUT METHODS */
router.put('/task/update/:id',postUpdateTask);

/**DELETE METHODS */
router.delete('/task/delete/:id',postDeleteTask);

export default router;