import { BrandName, CurrencyAmount, IForm, ImageUrl, Percentage, ProductCategory, Quantity, Rating, TextLong, TextShort, UniqueId } from "./generics";

export interface Product {
  readonly id: UniqueId;
  title: TextShort;
  description: TextLong;
  price: CurrencyAmount;
  discountPercentage: Percentage;
  rating: Rating;
  stock: Quantity;
  brand: BrandName;
  category: ProductCategory;
  thumbnail: ImageUrl;
  images: ImageUrl[];
}

// Partial, Pick, Omit
export type ProductImages = Pick<Product, 'thumbnail' | 'images'> ;

// export type ProductCreation  = Partial<Product>
export type ProductPartial  = {
  [Property in keyof Product]?: Product[Property];
}

/**
 * Minimum informations to bes send to the server for a prodcut creation.
 */
export type ProductMandatoryKeys  = Omit<Product, 'id' | 'thumbnail' | 'images' | 'rating' | 'discountPercentage'> ;

/**
 * Availables keys to be implemented in a form
 */
export type ProductPayload = ProductPartial & ProductMandatoryKeys; // intersection


/*
export type ProductForm  = {
  [Property in keyof ProductPayload]: FormControl<Product[Property] | null>;
}
*/

export type ProductForm = IForm< ProductPayload >
