import { Entity } from '@decahedron/entity';

export class User extends Entity {
  username = '';
  email: string | undefined = '';
  password: string | undefined = '';
}
