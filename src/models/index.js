// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NoteV2 } = initSchema(schema);

export {
  NoteV2
};