class OrderproductController {
    constructor(orderproductService) {
      this.orderproductService = orderproductService;
    }
  
    getAll = async ({ res, next }) => {
      try {
        const ordersproduct = await this.orderproductService.getAll();
        res.status(200).json(ordersproduct);
      } catch (err) {
        next(err);
      }
    };
  
    create = async (req, res, next) => {
      try {
        const orderproductCreate = await this.orderproductService.create({ ...req.body });
        res.status(201).json(orderproductCreate);
      } catch (err) {
        next(err);
      }
    };
  
    getOne = async (req, res, next) => {
      try {
        const service = await this.orderproductService.getOne({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    getAllByUser = async (req, res, next) => {
      try {
        const service = await this.orderproductService.getAllByUser({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
  
    calcul = async (req, res, next) => {
      try {
        const calcul = await this.orderproductService.calcul({ ...req.body });
        res.status(201).json(calcul);
      } catch (err) {
        next(err);
      }
    };
  }
  
  export default OrderproductController;