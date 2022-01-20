/**
 * userDataPermissionsKey is the object path in user data object.
 * example: userData = {user:{permissions: {}}} - userDataPermissionsKey: 'user.permissions'
 */
export interface UserOptions {
    userDataUrl: string;
    userDataPermissionsKey: string;
}
