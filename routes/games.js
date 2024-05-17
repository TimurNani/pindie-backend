const createGame = require("../middlewares/games");
const findGameById = require("../middlewares/games");
const updateGame = require("../middlewares/games");
const sendGameUpdated = require("../controllers/games");
const sendGameCreated = require("../controllers/games");
const findAllGames = require("../middlewares/games");
const deleteGame = require("../middlewares/games");
const sendGameDeleted = require("../controllers/games");
const checkEmptyFields = require("../middlewares/games");
const checkIfUsersAreSafe = require("../middlewares/games");
const checkIfCategoriesAvaliable = require("../middlewares/games");
const checkIsGameExsists = require("../middlewares/games");

gamesRouter.post("/games", findAllGames, checkIsGameExsists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);
gamesRouter.put("/games:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete("/games:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter; 