import { ROLES } from './roles';

export const DEMO_ACCOUNTS = [
  {
    id: 1,
    email: 'student@demo.com',
    password: 'demo123',
    role: ROLES.STUDENT,
    name: 'Max Student',
    className: 'Math 101'
  },
  {
    id: 2,
    email: 'teacher@demo.com',
    password: 'demo123',
    role: ROLES.TEACHER,
    name: 'Dr. Schmidt Teacher',
    department: 'Mathematics'
  },
  {
    id: 3,
    email: 'parent@demo.com',
    password: 'demo123',
    role: ROLES.PARENT,
    name: 'Maria Parent',
    children: ['Max Student']
  },
  {
    id: 4,
    email: 'school@demo.com',
    password: 'demo123',
    role: ROLES.SCHOOL,
    name: 'Gymnasium Berlin',
    institutionType: 'High School'
  },
  {
    id: 5,
    email: 'admin@demo.com',
    password: 'admin123',
    role: ROLES.ADMIN,
    name: 'System Admin',
    permissions: 'full'
  }
];

export const findDemoAccount = (email, password) => {
  return DEMO_ACCOUNTS.find(account => 
    account.email === email && account.password === password
  );
};

export const getDemoAccountByEmail = (email) => {
  return DEMO_ACCOUNTS.find(account => account.email === email);
};
