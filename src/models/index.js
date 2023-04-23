// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NoteV2, Bin, Note, User } = initSchema(schema);

export {
  NoteV2,
  Bin,
  Note,
  User
};