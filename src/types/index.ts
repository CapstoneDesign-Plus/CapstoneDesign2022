
export interface IUser {
  username: string,
  email: string,
  password: string,
  certificated: boolean,
  createdAt : Date,
  uclass: number,
  point: number,
}

export interface UserDTO {
  readonly username: string,
  readonly email: string,
  readonly uclass: number,
  readonly point: number,
  readonly password? : string,
}