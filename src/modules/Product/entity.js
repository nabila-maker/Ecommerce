class ProductEntity {
    constructor({
      id, name, description, price, type,
    }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.type = type;
    }
  
    validate() {
      //if (!this.mail || !this.password || !this.name || !this.lastname || !this.address || !this.tel || !this.type) return false;
      return true;
    }
  
  
  }
  
  export default ProductEntity;
  