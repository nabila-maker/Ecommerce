class ProductRouter {
    constructor(router, productController) {
      this.router = router;
      this.initializeRoutes(productController);
      return this.router;
    }
  
    initializeRoutes(productController) {
      this.router.route('/product')
        .get(productController.getOne)
        .post(productController.create)
        //.patch(productController.update)
        .delete(productController.delete);      
    }
  }
  
  export default ProductRouter;
  