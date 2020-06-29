export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  isActive?: boolean;
  register?: any;
  hide?: boolean;
}
