import { Request as BaseRequest } from 'express-serve-static-core';
import { Registration } from '../../../../types/authInterfaces';

export interface Request<T> extends BaseRequest {
  user?: Registration;
  body: T;
}
