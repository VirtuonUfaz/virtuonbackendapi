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
