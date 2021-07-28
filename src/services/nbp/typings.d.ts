declare namespace NBP {
  interface NameValueDto {
    name: string;
    value: string;
  }

  interface ListResultDto<T> {
    items: T[];
  }

  interface PagedResultDto<T> extends ListResultDto<T> {
    totalCount?: number;
  }

  interface LimitedResultRequestDto {
    maxResultCount: number;
  }

  interface PagedResultRequestDto extends LimitedResultRequestDto {
    skipCount?: number;
  }

  interface PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    sorting?: string;
  }

  interface AdvertShowRequest {
    provider: string;
    code: string;
    single: boolean;
  }

  interface AdvertShow {
    space: AdvertShowSpace;
    items: AdvertShowItem[];
  }

  interface AdvertShowSpace {
    id: string;
    name: string;
    code: string;
    provider: string;
    source: string;
  }

  interface AdvertShowItem {
    id: string;
    title: string;
    subTitle: string;
    path: string;
    source: string;
  }

  interface CategoryRequest {
    code?: string;
    parent?: string;
    level?: number;
    active?: boolean;
  }

  interface CategoryResponse {
    items: CategoryDto[];
  }

  interface CategoryDto {
    id: string;
    parent: string;
    provider: string;
    code: string;
    name: string;
    icons: string[];
    externalCode: string;
    children?: CategoryDto[];
  }

  interface ArticleRequest extends PagedResultRequestDto {
    keyword?: string;
    category?: string;
    tag?: string;
    active?: boolean;
  }

  interface ArticleItem {
    id: string;
    title: string;
    subTitle: string;
    info: string;
    pic: string;
    views: number;
  }

  interface ArticleDto {
    id: string;
    title: string;
    subTitle: string;
    info: string;
    pic: string;
    pics: string[];
    views: number;
    source: string;
    htmlContent: string;
  }

  interface ProductRequest extends PagedResultRequestDto {
    keyword?: string;
    code?: string;
    category?: string;
    brand?: string;
    shop?: string;
    active?: boolean;
    withSkus?: boolean;
    minPrice?: number;
    maxPrice?: number;
  }

  interface ProductItem {
    id: string;
    creationTime: Date;
    name: string;
    code: string;
    pic: string;
    info: string;
    price: number;
    marketPrice: number;
    unit: string;
    externalCode: string;
    views: number;
    isActive: boolean;
    skus: ProductSkuItem[];
  }

  interface ProductSkuItem {
    id: string;
    code: string;
    name: string;
    pic: string;
    price: number;
    marketPrice: number;
    unit: string;
    externalCode: string;
  }

  interface ProductDto {
    id: string;
    creationTime: Date;
    name: string;
    code: string;
    pic: string;
    pics: string[];
    appendixes: string[];
    info: string;
    htmlContent: string;
    packageContent: string;
    serviceContent: string;
    price: number;
    marketPrice: number;
    unit: string;
    externalCode: string;
    hasSkus: boolean;
    category: string;
    brands: string[];
    features: ProductFeature[];
    skuAttributes: ProductSkuAttribute[];
    views: number;
    isActive: boolean;
    skus: ProductSkuItem[];
  }

  interface ProductFeature {
    group: string;
    items: NameValueDto[];
  }

  interface ProductSkuAttribute {
    name: string;
    attributes: string[];
  }
}
