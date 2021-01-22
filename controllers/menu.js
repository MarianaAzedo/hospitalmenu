const menu = require('../models/menu')();

module.exports = () => {
  const getAllMenu = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { menus, err } = await menu.get();
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menus);
  };
  const getMenuByDescription = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { menus, err } = await menu.get(req.params.description);
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menus);
  };

  const getMenuByAllergens = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    //Allergy Set
    const userAllergens = (req.params.allergens || '').split(',');
    const { menus, err } = await menu.get();

    const filterCategoryByAllergens = (category, allergensToExclude) => {
      return category.filter((currentCategory) => {
        let includeThisCategory = true;
        currentCategory.allergens &&
          currentCategory.allergens.forEach((al) => {
            if (allergensToExclude.includes(al)) {
              includeThisCategory = false;
            }
          });
        return includeThisCategory;
      });
    };

    //Menus have allergies
    const userMenu = [];
    for (const menu of menus) {
      let userMenuTemp = {};
      const menuKeys = Object.keys(menu);
      menuKeys.forEach((menuKey) => {
        if (Array.isArray(menu[menuKey])) {
          const category = menu[menuKey];
          userMenuTemp[menuKey] = filterCategoryByAllergens(
            category,
            userAllergens,
          );
        }
      });
      userMenuTemp.description = menu.description;
      userMenu.push(userMenuTemp);
    }
    res.json(userMenu);
  };

  return {
    getAllMenu,
    getMenuByDescription,
    getMenuByAllergens,
  };
};
