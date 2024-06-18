const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtRoutes');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags - from classwork

router.route('/:thoughtId/reactions').post(addReaction);

// /api/Thoughts/:ThoughtId/tags/:tagId - from classwork

router.route('/:thoughtId/reactions').delete(removeReaction);

module.exports = router;