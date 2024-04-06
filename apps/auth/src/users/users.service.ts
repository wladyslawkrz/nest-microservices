import { SignInDto } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  signIn(request: SignInDto) {
    console.log('pending req');
    return {};
  }
}
