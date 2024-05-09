const gamesRouter = require("express").Router(); // Создали роутер
const findAllGames = require("../middlewares/games"); // Импортируем вспомогательные функции
const sendAllGames = require("../controllers/games"); // Импортируем контроллер

gamesRouter.get("/games", findAllGames, sendAllGames);

module.exports = gamesRouter; 