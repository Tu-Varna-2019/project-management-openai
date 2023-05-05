import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNoteV2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NoteV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Description?: string | null;
  readonly Priority?: string | null;
  readonly Reminder?: string | null;
  readonly sub?: string | null;
  readonly Deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNoteV2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NoteV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Description?: string | null;
  readonly Priority?: string | null;
  readonly Reminder?: string | null;
  readonly sub?: string | null;
  readonly Deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NoteV2 = LazyLoading extends LazyLoadingDisabled ? EagerNoteV2 : LazyNoteV2

export declare const NoteV2: (new (init: ModelInit<NoteV2>) => NoteV2) & {
  copyOf(source: NoteV2, mutator: (draft: MutableModel<NoteV2>) => MutableModel<NoteV2> | void): NoteV2;
}