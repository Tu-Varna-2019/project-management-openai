import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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

type EagerBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Notes: AsyncCollection<Note>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bin = LazyLoading extends LazyLoadingDisabled ? EagerBin : LazyBin

export declare const Bin: (new (init: ModelInit<Bin>) => Bin) & {
  copyOf(source: Bin, mutator: (draft: MutableModel<Bin>) => MutableModel<Bin> | void): Bin;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly Priority?: string | null;
  readonly Deleted?: boolean | null;
  readonly userID: string;
  readonly Reminder?: string | null;
  readonly binID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly Priority?: string | null;
  readonly Deleted?: boolean | null;
  readonly userID: string;
  readonly Reminder?: string | null;
  readonly binID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly password: string;
  readonly Notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly password: string;
  readonly Notes: AsyncCollection<Note>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}