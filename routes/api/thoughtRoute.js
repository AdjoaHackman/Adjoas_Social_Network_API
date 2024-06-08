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
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags - from classwork
router.route('/:ThoughtId/reactions').post(addReaction);

// /api/Thoughts/:ThoughtId/tags/:tagId - from classwork
router.route('/:ThoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;