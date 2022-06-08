class OrderRouter {
    constructor(router, orderController) {
      this.router = router;
      this.initializeRoutes(orderController);
      return this.router;
    }
  
    initializeRoutes(orderController) {
      this.router.route('/product')
        .get(orderController.getOne)
        .get(orderController.getAllByUser)

    }
  }
  
  export default OrderRouter;
  