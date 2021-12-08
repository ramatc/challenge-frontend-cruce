const mainController = {
   index:(req, res) => {
      res.render("index", {title:"Home - CRUCE"})
   },

   list:(req, res) => {
      res.render("list", {title:"Listado - CRUCE"})
   },

   form:(req, res) => {
      res.render("form", {title:"Formulario - CRUCE"})
   }
}  

module.exports = mainController;