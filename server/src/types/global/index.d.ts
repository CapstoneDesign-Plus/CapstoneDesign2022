declare namespace Express {
  interface User {
    username: string;
    email: string;
    password: string;
    certificated: boolean;
    createdAt: Date;
    uclass: number;
    point: number;
    tickets: string[];
  }
}
