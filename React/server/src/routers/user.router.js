const { getUser, postUser, postLogout,getFavoriteList, postFavorite, deleteFavorite, getFavorite } = require('../controller/user.controller');
const router = require("express").Router();

router.post('/login', getUser);
router.post('/logout', postLogout)

router.post('/register', postUser);

router.post('/favorite', postFavorite).get('/favorite/:id', getFavorite).delete('/favorite', deleteFavorite);

router.get('/favoritesList', getFavoriteList)

module.exports = router;
