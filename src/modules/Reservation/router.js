class ReservationRouter {
    constructor(router, reservationController) {
      this.router = router;
      this.initializeRoutes(reservationController);
      return this.router;
    }
  
    initializeRoutes(reservationController) {
      this.router.route('/reservation')
        .get(reservationController.getOne)
        .get(reservationController.getAllByUser)

    }
  }
  
  export default ReservationRouter;
  