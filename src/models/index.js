// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { IssueTemplate, Activity, Project, User, Ticket, NoteV2 } = initSchema(schema);

export {
  IssueTemplate,
  Activity,
  Project,
  User,
  Ticket,
  NoteV2
};