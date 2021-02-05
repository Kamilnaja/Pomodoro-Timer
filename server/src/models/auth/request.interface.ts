import { Request as BaseRequest } from 'express-serve-static-core';
import { Registration } from '../../../../types/authInterfaces';

export interface Request extends BaseRequest {
  user?: Registration;
}
