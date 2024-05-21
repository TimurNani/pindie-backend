const gamesRouter = require("express").Router();

const {
createGame,
findGameById,
updateGame,
findAllGames,
deleteGame,
checkEmptyFields,
checkIfUsersAreSafe,
checkIfCategoriesAvaliable,
checkIsGameExists
} = require("../middlewares/games");

const {
sendGameUpdated,
sendGameCreated,
sendGameDeleted,
sendAllGames,
sendGameById
} = require("../controllers/games");


gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);
gamesRouter.put("/games:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete("/games:id", deleteGame, sendGameDeleted);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games:id", findGameById, sendGameById);

module.exports = gamesRouter; 