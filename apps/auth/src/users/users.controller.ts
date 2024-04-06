import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  CreateUserDto,
  EmptyResponse,
  RefreshTokensDto,
  RefreshTokensResponse,
  SignInDto,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@AuthServiceControllerMethods()
export class UsersController implements AuthServiceController {
  constructor(private readonly usersService: UsersService) {}

  signUp(
    request: CreateUserDto,
  ): EmptyResponse | Promise<EmptyResponse> | Observable<EmptyResponse> {
    return undefined;
  }

  signIn(
    request: SignInDto,
  ): EmptyResponse | Promise<EmptyResponse> | Observable<EmptyResponse> {
    console.log('pending req');
    return this.usersService.signIn(request);
  }

  refresh(
    request: RefreshTokensDto,
  ):
    | RefreshTokensResponse
    | Promise<RefreshTokensResponse>
    | Observable<RefreshTokensResponse> {
    return undefined;
  }

  logout(
    request: RefreshTokensDto,
  ): EmptyResponse | Promise<EmptyResponse> | Observable<EmptyResponse> {
    throw new Error('Method not implemented.');
  }
}
