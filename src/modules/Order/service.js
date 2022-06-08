class OrderController {
    constructor(orderService) {
      this.orderService = orderService;
    }
  
    getAll = async ({ res, next }) => {
      try {
        const orders = await this.orderService.getAll();
        res.status(200).json(orders);
      } catch (err) {
        next(err);
      }
    };
  
    create = async (req, res, next) => {
      try {
        const orderCreate = await this.orderService.create({ ...req.body });
        res.status(201).json(orderCreate);
      } catch (err) {
        next(err);
      }
    };
  
    getOne = async (req, res, next) => {
      try {
        const service = await this.orderService.getOne({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    getAllByUser = async (req, res, next) => {
      try {
        const service = await this.orderService.getAllByUser({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
  
    calcul = async (req, res, next) => {
      try {
        const calcul = await this.orderService.calcul({ ...req.body });
        res.status(201).json(calcul);
      } catch (err) {
        next(err);
      }
    };
  }
  
  export default OrderController;