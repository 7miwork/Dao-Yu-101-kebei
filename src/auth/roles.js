export const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  PARENT: 'parent',
  SCHOOL: 'school',
  ADMIN: 'admin',
  SALES: 'sales',
  SUPPORT: 'support'
};

export const ROLE_PERMISSIONS = {
  [ROLES.STUDENT]: ['view_own_progress', 'take_assignments', 'view_classes'],
  [ROLES.TEACHER]: ['manage_classes', 'create_assignments', 'view_student_progress', 'manage_grades'],
  [ROLES.PARENT]: ['view_child_progress', 'view_reports', 'communicate_with_school'],
  [ROLES.SCHOOL]: ['manage_institution', 'view_all_progress', 'manage_teachers', 'manage_students'],
  [ROLES.ADMIN]: ['manage_system', 'manage_all_users', 'view_analytics', 'system_settings'],
  [ROLES.SALES]: ['manage_leads', 'view_sales_data', 'create_proposals'],
  [ROLES.SUPPORT]: ['help_users', 'view_tickets', 'manage_support']
};

export const getDashboardPath = (role) => {
  const paths = {
    [ROLES.STUDENT]: '/dashboard/student',
    [ROLES.TEACHER]: '/dashboard/teacher',
    [ROLES.PARENT]: '/dashboard/parent',
    [ROLES.SCHOOL]: '/dashboard/school',
    [ROLES.ADMIN]: '/dashboard/admin',
    [ROLES.SALES]: '/dashboard/sales',
    [ROLES.SUPPORT]: '/dashboard/support'
  };
  return paths[role] || '/login';
};
