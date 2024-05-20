export enum UserRole {
      admin = 'admin',
      editor = 'editor',
      guest = 'guest',
}

type RoleDescription = Record<UserRole, boolean>;

// Замініть наступний код на версію за допомогою Record
const roleDescription: RoleDescription = {
      [UserRole.admin]: true,
      [UserRole.editor]: true,
      [UserRole.guest]: false,
};
    