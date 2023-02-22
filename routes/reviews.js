const express = require('express');
const router = express.Router({ mergeParams: true });

const { isLoggedIn, validateReview, isReviewAuthor } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const reviews = require('../controllers/reviews');

// Create
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

// Delete
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;