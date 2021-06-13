export interface RouteType {
    component: any;
    path: string;
    isPrivate: boolean;
    exact?: boolean;
    rest?: string;
}
  
export interface AddModelT {
    BrandId: string;
    Name: string;
    TypeId: number;
    Comment: string;
}