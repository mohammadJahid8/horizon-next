import { type SchemaTypeDefinition } from 'sanity';

import { homeType } from './homeType';
import { partnerType } from './partnerType';
import { proType } from './proType';
import { footerType } from './footerType';
import { proLoginType } from './proLoginType';
import { partnerLoginType } from './partnerLoginType';
import { proRegisterType } from './proRegisterType';
import { partnerRegisterType } from './partnerRegisterType';
import { environmentType } from './environmentType';
import { resourcePagesType } from './resourcePagesType';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    proType,
    partnerType,
    footerType,
    proLoginType,
    partnerLoginType,
    proRegisterType,
    partnerRegisterType,
    environmentType,
    resourcePagesType,
  ],
};
