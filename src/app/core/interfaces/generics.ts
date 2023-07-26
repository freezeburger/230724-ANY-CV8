import { FormControl } from "@angular/forms";

/**
 * A unique positive identifier for items of the same collection
 */
export type UniqueId = number;

/**
 * Unlimited text.
 */
export type TextLong = string;

/**
 * Maximum of 75 characters
 */
export type TextShort= string;

/**
 * Two decimal number '00.00'
 */
export type CurrencyAmount = number;

/**
 * Positive number in range 0-100
 */
export type Percentage = number;

/**
 * Decimal number from 0 to 10
 */
export type Rating = number;

/**
 * Positive integer
 */
export type Quantity = number;


/**
 * Absolute image url 'https://domain/resource'
 */
export type ImageUrl = string;

/**
 * A Specific brand name
 */
export type BrandName = 'Apple' | 'Samsung'  | string;

/**
 * A Specific product category
 */
export type ProductCategory = 'fragrances' | 'smartphones'  | 'laptops' | 'skincare' | 'groceries' | 'home-decoration' | 'misc'

/**
 * FormControl mapper for Reactive Forms completion
 */
export type IForm< DataType >  = {
  [Property in keyof DataType ]: FormControl<DataType[Property] | null>;
}
