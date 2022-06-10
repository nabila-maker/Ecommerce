class DeliveryRouter {
    constructor(router, auth, deliveryController) {
      this.router = router;
      this.initializeRoutes(deliveryController, auth);
      return this.router;
    }
  
    initializeRoutes(deliveryController, auth) {
      this.router.route('/delivery')
        .get(deliveryController.getOneByUser)
        .post(deliveryController.create)
        //.patch(userController.update)
        .delete(deliveryController.delete);
     
      
    }
  }
  
  export default DeliveryRouter;
  