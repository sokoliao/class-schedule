export interface LoginResponseDto {
  data: {
    _id: string;
    email: string;
    password: string;
    __v: string;
  };
  message: string;
}
