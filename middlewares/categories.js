const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /categories найдём все документы категорий
  req.categoriesArray = await categories.find({});
  next();
}

const createCategory = async (req, res, next) => {
  try {
    req.category = await categories.create(req.body);
    next();
  } catch {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error creating category' }));
  }
}

const findCategoryById = async (req, res, next) => {
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({ message: 'Category not found' }));
  }
}

const updateCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    next();
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error updating category' }));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error deleting category' }));
  }
}

const checkIsCategoryExists = async (req, res, next) => {
  // Среди существующих в базе категорий пытаемся найти категорию с тем же именем,
  // с которым хотим создать новую категорию
  const isInArray = req.categoriesArray.find((category) => {
    return req.body.name === category.name;
  });
  // Если нашли совпадение, то отвечаем кодом 400 и сообщением
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
  } else {
  // Если категория, которую хотим создать, действительно новая, то передаём управление дальше
    next();
  }
}; 

const checkIfCategoriesAvaliable = async (req, res, next) => {
  // Проверяем наличие жанра у игры
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
  } else {
    next();
  }
};

// Экспортируем функцию поиска всех категорий
module.exports = { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkIfCategoriesAvaliable }; 