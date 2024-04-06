import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { ReplaySubject } from 'rxjs';
import { AUTH_SERVICE_NAME, AuthServiceClient, SignInDto } from '@app/common';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: AuthServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  signin(data: SignInDto) {
    return this.usersService.signIn(data);
  }
}
