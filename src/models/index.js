// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sprint, PI, IssueTemplate, Activity, Project, User, Ticket, NoteV2 } = initSchema(schema);

export {
  Sprint,
  PI,
  IssueTemplate,
  Activity,
  Project,
  User,
  Ticket,
  NoteV2
};