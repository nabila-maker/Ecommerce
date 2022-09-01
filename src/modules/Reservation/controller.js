class ReservationController {
    constructor(reservationService) {
      this.reservationService = reservationService;
    }
  
    getAll = async ({ res, next }) => {
      try {
        const reservations = await this.reservationService.getAll();
        res.status(200).json(reservations);
      } catch (err) {
        next(err);
      }
    };
  
    create = async (req, res, next) => {
      try {
        const reservationCreate = await this.reservationService.create({ ...req.body });
        res.status(201).json(reservationCreate);
      } catch (err) {
        next(err);
      }
    };
  
    getOne = async (req, res, next) => {
      try {
        const service = await this.reservationService.getOne({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    getAllByUser = async (req, res, next) => {
      try {
        const service = await this.reservationService.getAllByUser({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
  
    calcul = async (req, res, next) => {
      try {
        const calcul = await this.reservationService.calcul({ ...req.body });
        res.status(201).json(calcul);
      } catch (err) {
        next(err);
      }
    };
  }
  
  export default ReservationController;