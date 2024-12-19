export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleStatus = Record<UserRole, string>;

const RoleDescription: UserRoleStatus = {
  [UserRole.admin]: 'admin',
  [UserRole.editor]: 'editor',
  [UserRole.guest]: 'guest',
};