enum Gender {
  Male = "Male",
  Female = "Female",
}

enum Status {
  Online = "Online",
  Offline = "Offline",
  Busy = "Busy",
}
enum Years {
  L0 = "l0",
  L1 = "l1",
  L2 = "l2",
  L3 = "l3",
  Master = 'master', 
  Graduated = 'graduated'
}
enum Types{
  Mid1 = 'mid1', 
  Mid2 = 'mid2',
  Project = 'project',
  Pw = 'pw',
  Final = 'final',
  Retake = 'retake'
}
enum Priority{
  Urgent = 'urgent', 
  High = 'high', 
  Normal = 'normal',
  Low =  'low'
}
enum Events{
  Started = 'started', 
  Ended = 'ended'
}


export interface ArchiveVideoLogsType {
  id: number;
  student_id: number;
  video_id: number;
  stayed_at: Date;
  created_at: Date;
  updated_at: Date;
}


export interface CoursesType {
  id: number;
  code: String;
  key: String;
  value: String;
  coefficient: number;
  head_teacher_id: number;
  created_at: Date;
  updated_at: Date;
}


export interface EventClasseType {
  event_id: number;
  teacher_id: number;
  subject_id: number;
  group_id: number;
  created_at: Date;
  updated_at: Date;
}


export interface EventExtrasType {
  event_id: number;
  name: String;
  host: String;
  participant_number: number;
  is_public: Boolean;
  created_at: Date;
  updated_at: Date;
}
export interface EventMessagesType {
  id: number;
  user_id: number;
  body: String;
  date: Date;
  event_id: number;
  file: String;
  created_at: Date;
  updated_at: Date;
}
export interface EventRegistersType {
  id: number;
  user_id: number;
  full_name: String;
  email: String;
  phone_number: String;
  is_participated: Boolean;
  created_at: Date;
  updated_at: Date;
}

export interface EventTypesType {
  id: number;
  name: String;
  created_at: Date;
  updated_at: Date;
}
export interface EventsType {
  id: number;
  event_type_id: number;
  room_id: number;
  start_date: Date;
  end_date: Date;
  is_online: Boolean;
  event_link:String;
  author_id:number;
  created_at: Date;
  updated_at: Date;
}

export interface ExamsType {
  id: number;
  type: Types;
  coefficient: number;
  course_id: number;
  event_id: number;
  created_at: Date;
  updated_at: Date;
}
export interface GradesType {
  id: number;
  exam_id : number;
  student_id: number;
  grade: number;
  created_at: Date;
  updated_at: Date;
}
export interface GroupCoursesType {
  group_id: number;
  course_id : number;
  created_at: Date;
  updated_at: Date;
}
export interface GroupsType {
  id: number;
  code : String;
  name: String;
  year: Years;
  created_at: Date;
  updated_at: Date;
}

export interface HolidaysType {
  id: number;
  code : String;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface JCategoriesType {
  id: number;
  key : number;
  value: String;
  created_at: Date;
  updated_at: Date;
}
export interface JTagsType {
  id: number;
  key : number;
  value: String;
  created_at: Date;
  updated_at: Date;
}
export interface JournalCategoriesType {
  journal_id  : number;
  category_id : number;
  created_at: Date;
  updated_at: Date;
}

export interface JournalTagsType {
  journal_id  : number;
  tag_id : number;
  created_at: Date;
  updated_at: Date;
}
export interface JournalsType {
  id: number;
  author : number;
  title: String;
  description: String;
  upload_date: Date;
  publication_date : Date;
  file: String;
  journal: String;
  publisher: String;
  issue: number;
  created_at: Date;
  updated_at: Date;
}

export interface KnexMigrationsType {
  id  : number;
  name : String;
  batch: number;
  updated_at: Date;
}

export interface KnexMigrationsLock {
  index  : number;
  is_locked : number;

}

export interface LogsType {
  id: number;
  user_id : number;
  event: Events;
  operation: String;
  ip: String;
  created_at: Date;
  updated_at: Date;
}


export interface NotificationsType {
  id: number;
  user_id : number;
  title: String;
  description: String;
  link: String;
  is_seen : Boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ParticipationType {
  event_id  : number;
  user_id : number;
  created_at: Date;
  updated_at: Date;
}
export interface PermissionType {
  id  : number;
  description : String;
  created_at: Date;
  updated_at: Date;
}
export interface PrivateDocumentTypeType {
  id  : number;
  name : String;
  created_at: Date;
  updated_at: Date;
}
export interface PrivateDocumentsType {
  id: number;
  private_document_type_id : number;
  user_id: number;
  year: number;
  is_accessible: Boolean;
  created_at: Date;
  updated_at: Date;
}


export interface PrivateTasksType {
  id: number;
  user_id : number;
  title: String;
  description: String;
  priority: String;
  is_resolved : Boolean;
  deadline: Date;
  created_at: Date;
  updated_at: Date;
}
export interface RolePermissionType {
  role_id  : number;
  permission_id : number;
  created_at: Date;
  updated_at: Date;
}
export interface RolesType {
  role_id  : number;
  name : String;
  created_at: Date;
  updated_at: Date;
}

export interface RolesTypesType {
  id  : number;
  name : String;
  color  : String;
  created_at: Date;
  updated_at: Date;
}

export interface RoomsType {
  id  : number;
  number : number;
  room_type_id  : number;
  created_at: Date;
  updated_at: Date;
}

export interface Semesters {
  id  : number;
  name : String;
  start_date  : Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface TaskCommentsType {
  id  : number;
  users_id : number;
  task_id  : number;
  comment: String;
  created_at: Date;
  updated_at: Date;
}
export interface TaskUploadsType {
  id  : number;
  task_id : number;
  student_id  : number;
  file: String;
  created_at: Date;
  updated_at: Date;
}
export interface TaskType {
  id  : number;
  name : String;
  description : String;
  teacher : number;
  course  : number;
  created_at: Date;
  updated_at: Date;
}

export interface TicketMessagesType {
  id  : number;
  ticket_id : number;
  author_id : number;
  content : String;
  created_at: Date;
  updated_at: Date;
}

export interface TicketUploadsType {
  id  : number;
  ticket_id : number;
  author_id : number;
  file : String;
  created_at: Date;
  updated_at: Date;
}

export interface TicketsType {
  id  : number;
  author_id : number;
  priority : Priority;
  title : String;
  body : String;
  status : Status;
  created_at: Date;
  updated_at: Date;
}


export interface UserType {
  id: number;
  user_name: String;
  first_name: String;
  last_name: String;
  gender: Gender;
  phone_number: String;
  email: String;
  birth_date: Date;
  register_date: Date;
  auth_token: String;
  phone_verified: Boolean;
  email_verified: Boolean;
  is_blocked: Boolean;
  profile_picture_url: String;
  status: Status;
  role_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserStudentType {
  user_id: number;
  student_id: String;
  group_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserTeacherType {
  user_id: number;
  teacher_id: String;
  speciality: String;
  created_at: Date;
  updated_at: Date;
}
export interface UserAffairsType {
  user_id: number;
  affairs_id: String;
  year: Years;
  created_at: Date;
  updated_at: Date;
}
export interface VerificationCodeType {
  id: number;
  user_id: number;
  phone_code: String;
  email_code: String;
  created_at: Date;
  generation_trials: number;
}

export interface VideoArchivesType {
  id: number;
  event_id: number;
  created_at: Date;
  updated_at: Date;
}