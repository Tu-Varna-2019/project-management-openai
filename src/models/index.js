// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, User, Ticket, NoteV2 } = initSchema(schema);

export {
  Project,
  User,
  Ticket,
  NoteV2
};