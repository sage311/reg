export interface INumbers {
  a: number;
  b: string;
  c: string | number;
}

export interface ICar {
  name: string;
  year: number;
  price: number;
}

export interface ICars {
  cars: ICar[];
}
