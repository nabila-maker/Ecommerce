class DeliveryController {
    constructor(deliveryService, jwtService) {
      this.deliveryService = deliveryService;
      this.jwtService = jwtService;
    }
  
    getAll = async ({ req, res, next }) => {
      try {
        const deliveries = await this.deliveryService.getAll();
        res.status(200).json(deliveries);
      } catch (err) {
        next(err);
      }
    };
  
    create = async (req, res, next) => {
      try {
        const delivery = await this.deliveryService.create({ ...req.body });
        res.status(201).json(delivery);
      } catch (err) {
        next(err);
      }
    };
  
    getOne = async (req, res, next) => {
      try {
        const service = await this.deliveryService.getOne({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    getOneByUser = async (req, res, next) => {
      try {
        const service = await this.deliveryService.getOneByUser({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    update = async (req, res, next) => {
      try {
        const service = await this.deliveryService.update({ ...req.body });
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    delete = async (req, res, next) => {
      try {
        const { id } = req.body;
        const serviceFound = await this.deliveryService.findOne({
          where: { id },
        });
  
        await serviceFound.delete();
  
        res.status(201).json(serviceFound);
      } catch (err) {
        next(err);
      }
    };
  

  }
  
  export default DeliveryController;
  