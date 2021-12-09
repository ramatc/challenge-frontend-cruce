const db = require("../database/models");
const Products = db.Product;

const mainController = {
   //Muestra el home, con un listado de productos
   index: (req, res) => {
      res.render("index", {title:"Home - CRUCE"})
   },

   //Muestra el listado de los productos
   list: (req, res) => {
      res.render("list", {title:"Listado - CRUCE"})
   },

   //Muestra el detalle de un producto
   detail: async (req, res) => {
      let Product = await Products.findByPk(req.params.id);
      res.render("detail", {title: "Detalle de producto - CRUCE", product: Product})
   },

   //Muestra el formulario de creación de un producto
   create: (req, res) => {
      res.render("form", {title:"Crear producto - CRUCE"})
   },

   //Metodo para crear un producto
   store: async (req, res) => {
      await Products.create({
         name: req.body.name,
         price: req.body.price,
         image: req.body.image,
         discount: req.body.discount,
         stock: req.body.stock
      })
      res.redirect("/list");
   },

   //Muestra el formulario de edición de un producto
   edit: async (req,res) => {
      let Product = await Products.findByPk(req.params.id)
      res.render("formEdit", {title:"Editar producto - CRUCE", product: Product})
   },

   //Metodo para editar un producto
   update: async (req, res) => {
      await Products.update({
         name: req.body.name,
         price: req.body.price,
         image: req.body.image,
         discount: req.body.discount,
         stock: req.body.stock,
      },
      {
         where: {
            id: req.params.id
         }
      })
      res.redirect("/list");
   },

   //Metodo para eliminar un producto
   destroy: async (req, res) => {
      let Product = await Products.findByPk(req.params.id);
      await Product.destroy();
		res.redirect("/list");
   }
}  

module.exports = mainController;