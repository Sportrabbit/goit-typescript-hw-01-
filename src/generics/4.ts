type User = {
      name: string;
      surname: string;
      email: string;
      password: string;
}
    
function createOrUpdateUser(initialValues: Partial<User>): User {
      // Оновлення користувача
    const defaultUser: Partial<User> = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };

    return {...defaultUser, ...initialValues} as User;
}
    
createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
});
    