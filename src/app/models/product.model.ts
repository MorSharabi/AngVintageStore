class Product {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public image: string = '',
    public price: number = 0,
    public city: string = '',
    public phoneNumber: string = '',
    public publicationDate: Date = new Date(1990, 1, 1),
  ) {}
}
export default Product;
