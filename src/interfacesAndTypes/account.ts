export type TWeekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TTransactionType =
  | "branchPurchase"
  | "onlinePurchase"
  | "virtualCard";

export type TSocialMedia = "facebook" | "instagram" | "twitter";

export interface IQuery {
  orderBy?: string;
  haveVoucher?: string;
  filterByTag?: string;
  page?: number;
  limit?: number;
}

export interface ITag {
  name: string;
  id_web: string;
  type_id: string;
  type: string;
}

export interface IBranch {
  id: string;
  crmid: string;
  country: string;
  state: string;
  city: string;
  cuit: string;
  neighborhood: string;
  zip_code?: string;
  region?: string;
  address: string;
  number: string;
  observations?: string;
  location: number;
  status: string;
  phone?: string;
  virtualCard: boolean;
  created_on: Date;
  updated_on: Date;
}

export interface IImage {
  id: string;
  type: string;
  url: string;
  highlighted: boolean;
  thumb: boolean;
}

export interface IValidity {
  date_from: Date;
  date_to: Date;
}

export interface IBenefit {
  ids: string[];
  id: string;
  program_name: string[];
  name: string;
  type: string;
  type_benefit: string;
  type_weight: number;
  category: string;
  subcategory: string;
  gender?: string;
  exclusive: boolean;
  alliance?: any;
  title: string;
  description: string;
  legal: string;
  images: IImage[];
  value: string;
  weekdays: TWeekday[];
  status: string;
  auto_renew: string;
  validity: IValidity;
  crm_ids: string[];
  created_on: Date;
  updated_on: Date;
  transactionTypes: TTransactionType[];
  urlBenefit?: string;
  haveVoucher: boolean;
}

export interface ISocialMedia {
  name: string;
  type: TSocialMedia;
  prefix: string;
  url: string;
}

export interface ISocialNetworks {
  facebook?: ISocialMedia;
  twitter?: ISocialMedia;
  instagram?: ISocialMedia;
}

export interface IAccount {
  id: string;
  crmid: string;
  name: string;
  isGeoLocal: boolean;
  haveVoucher: boolean;
  cuit: string;
  status: string;
  tags: ITag[];
  branches: IBranch[];
  benefits: IBenefit[];
  phone?: string;
  email?: string;
  web?: string;
  highlighted: string;
  created_on: Date;
  updated_on: Date;
  ecommerce: boolean;
  images: IImage[];
  relevance: number;
  description: string;
  virtualCard: boolean;
  socialNetworks: ISocialNetworks;
}
