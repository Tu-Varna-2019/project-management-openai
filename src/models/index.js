// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, Project, User, Ticket, NoteV2 } = initSchema(schema);

export {
  Activity,
  Project,
  User,
  Ticket,
  NoteV2
};