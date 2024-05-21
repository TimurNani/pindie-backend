const categoriesRouter = require("express").Router();

const {
findAllCategories,
createCategory,
findCategoryById,
updateCategory,
deleteCategory,
checkIsCategoryExists,
checkEmptyName,
} = require("../middlewares/categories.js");
const {
sendAllCategories,
sendСategoryById,
sendCategoryCreated,
sendCategoryDeleted,
sendCategoryUpdated,
} = require("../controllers/categories.js")

// Обрабатываем GET-запрос с роутом '/categories'
// categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCategoryCreated);
// categoriesRouter.put('/categories:id', checkEmptyName, updateCategory, sendCategoryUpdated);
// categoriesRouter.delete('/categories:id', deleteCategory, sendCategoryDeleted);
// categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
// categoriesRouter.get("/categories/:id", findCategoryById, sendСategoryById);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;