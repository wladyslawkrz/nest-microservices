/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface EmptyResponse {
}

export interface CreateUserDto {
  login: string;
  email: string;
  password: string;
  phoneNumber?: string | undefined;
  firstName?: string | undefined;
  midName?: string | undefined;
  lastName?: string | undefined;
  userRole?: string | undefined;
}

export interface SignInDto {
  loginOrEmail: string;
  password: string;
}

export interface RefreshTokensDto {
  refreshToken: string;
}

export interface RefreshTokensResponse {
  accessToken: string;
  refreshToken: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  signUp(request: CreateUserDto): Observable<EmptyResponse>;

  signIn(request: SignInDto): Observable<EmptyResponse>;

  refresh(request: RefreshTokensDto): Observable<RefreshTokensResponse>;

  logout(request: RefreshTokensDto): Observable<EmptyResponse>;
}

export interface AuthServiceController {
  signUp(request: CreateUserDto): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;

  signIn(request: SignInDto): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;

  refresh(
    request: RefreshTokensDto,
  ): Promise<RefreshTokensResponse> | Observable<RefreshTokensResponse> | RefreshTokensResponse;

  logout(request: RefreshTokensDto): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signUp", "signIn", "refresh", "logout"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
