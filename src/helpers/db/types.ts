export interface UserType {
  id: number;
  is_blocked: Boolean;
  email: String;
}
export interface VerificationCodeType {
  id: number;
  user_id: number;
  phone_code: String;
  email_code: String;
  created_at: Date;
  generation_trials: number;
}
