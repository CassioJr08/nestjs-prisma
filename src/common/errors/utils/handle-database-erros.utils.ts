import { DataBaseError } from '../types/DataBaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErros {
  UniqueConstraintFail = 'P2002',
}

export const handleDataBaseErros = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErros.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DataBaseError(e.message);
  }
};
