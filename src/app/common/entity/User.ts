import {BaseModule} from './BaseModule';

export class User extends BaseModule {
  username?: string;
  password?: string;
  type: Type;
}

export enum Type {
  admin,
  Dadmin,
  user
}

