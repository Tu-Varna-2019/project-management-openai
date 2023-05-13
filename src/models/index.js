// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, NoteV2 } = initSchema(schema);

export {
  Task,
  NoteV2
};