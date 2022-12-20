declare namespace Express {
  interface User {
    username: string;
    email: string;
    password: string;
    certificated: boolean;
    createdAt: number;
    uclass: number;
    point: number;
    tickets: number[];
  }
}
