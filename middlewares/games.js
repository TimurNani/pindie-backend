const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  // Выведем в терминал результат поиска 
  next();
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames; 