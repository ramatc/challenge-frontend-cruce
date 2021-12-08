const db = require('../database/models');
const Products = db.Product;

const mainController = {
   //Muestra el home, con un listado de productos
   index:(req, res) => {
      res.render("index", {title:"Home - CRUCE"})
   },

   //Muestra el listado de los productos
   list:(req, res) => {
      res.render("list", {title:"Listado - CRUCE"})
   },

   //Elimina un producto
   destroy: async (req, res) => {
      let Product = await Products.findByPk(req.params.id);
      await Product.destroy();
		res.redirect('/list');
   },
}  

module.exports = mainController;