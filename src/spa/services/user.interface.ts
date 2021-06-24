export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  adminRole: boolean;
  myCars: Array<number>;
}
