import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSprint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sprint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StartDate: string;
  readonly EndDate?: string | null;
  readonly Number: number;
  readonly piID: string;
  readonly Tickets?: (Ticket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySprint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sprint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StartDate: string;
  readonly EndDate?: string | null;
  readonly Number: number;
  readonly piID: string;
  readonly Tickets: AsyncCollection<Ticket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sprint = LazyLoading extends LazyLoadingDisabled ? EagerSprint : LazySprint

export declare const Sprint: (new (init: ModelInit<Sprint>) => Sprint) & {
  copyOf(source: Sprint, mutator: (draft: MutableModel<Sprint>) => MutableModel<Sprint> | void): Sprint;
}

type EagerPI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Number: number;
  readonly projectID: string;
  readonly Sprints?: (Sprint | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Number: number;
  readonly projectID: string;
  readonly Sprints: AsyncCollection<Sprint>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PI = LazyLoading extends LazyLoadingDisabled ? EagerPI : LazyPI

export declare const PI: (new (init: ModelInit<PI>) => PI) & {
  copyOf(source: PI, mutator: (draft: MutableModel<PI>) => MutableModel<PI> | void): PI;
}

type EagerIssueTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IssueTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description: string;
  readonly Comment?: string | null;
  readonly StoryPoint?: number | null;
  readonly IssueType: string;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIssueTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IssueTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description: string;
  readonly Comment?: string | null;
  readonly StoryPoint?: number | null;
  readonly IssueType: string;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type IssueTemplate = LazyLoading extends LazyLoadingDisabled ? EagerIssueTemplate : LazyIssueTemplate

export declare const IssueTemplate: (new (init: ModelInit<IssueTemplate>) => IssueTemplate) & {
  copyOf(source: IssueTemplate, mutator: (draft: MutableModel<IssueTemplate>) => MutableModel<IssueTemplate> | void): IssueTemplate;
}

type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ModifiedDate: string;
  readonly Changes: string;
  readonly UserID: string;
  readonly TicketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ModifiedDate: string;
  readonly Changes: string;
  readonly UserID: string;
  readonly TicketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly OProjectMTickets?: (Ticket | null)[] | null;
  readonly ImageProject?: string | null;
  readonly IssueTemplates?: (IssueTemplate | null)[] | null;
  readonly PIS?: (PI | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly OProjectMTickets: AsyncCollection<Ticket>;
  readonly ImageProject?: string | null;
  readonly IssueTemplates: AsyncCollection<IssueTemplate>;
  readonly PIS: AsyncCollection<PI>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly username: string;
  readonly ImageProfile?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly username: string;
  readonly ImageProfile?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ticket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Description?: string | null;
  readonly TicketID: number;
  readonly StoryPoint?: number | null;
  readonly Watch?: string | null;
  readonly Reporter: string;
  readonly Asignee?: string | null;
  readonly ImageTicket?: string | null;
  readonly EpicLink?: string | null;
  readonly CreatedDate: string;
  readonly UpdatedDate?: string | null;
  readonly ResolvedDate?: string | null;
  readonly Subtasks?: (string | null)[] | null;
  readonly IssueType: string;
  readonly Priority: string;
  readonly TicketStatus: string;
  readonly Comment?: string | null;
  readonly sprintID: string;
  readonly projectID: string;
  readonly GitCommit?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ticket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Description?: string | null;
  readonly TicketID: number;
  readonly StoryPoint?: number | null;
  readonly Watch?: string | null;
  readonly Reporter: string;
  readonly Asignee?: string | null;
  readonly ImageTicket?: string | null;
  readonly EpicLink?: string | null;
  readonly CreatedDate: string;
  readonly UpdatedDate?: string | null;
  readonly ResolvedDate?: string | null;
  readonly Subtasks?: (string | null)[] | null;
  readonly IssueType: string;
  readonly Priority: string;
  readonly TicketStatus: string;
  readonly Comment?: string | null;
  readonly sprintID: string;
  readonly projectID: string;
  readonly GitCommit?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ticket = LazyLoading extends LazyLoadingDisabled ? EagerTicket : LazyTicket

export declare const Ticket: (new (init: ModelInit<Ticket>) => Ticket) & {
  copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}

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
  readonly Notified?: boolean | null;
  readonly ImageName?: string | null;
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
  readonly Notified?: boolean | null;
  readonly ImageName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NoteV2 = LazyLoading extends LazyLoadingDisabled ? EagerNoteV2 : LazyNoteV2

export declare const NoteV2: (new (init: ModelInit<NoteV2>) => NoteV2) & {
  copyOf(source: NoteV2, mutator: (draft: MutableModel<NoteV2>) => MutableModel<NoteV2> | void): NoteV2;
}