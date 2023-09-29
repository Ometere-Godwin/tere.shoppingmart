export interface ProductsProps{
    _id: number,
    title: number,
    isNew: boolean,
    oldPrice: number,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
    quantity: number,
};
// Instead of typing the PorductPrps all over again, simply say item: ProductProps
export interface ItemProps{
    item: ProductsProps;
}