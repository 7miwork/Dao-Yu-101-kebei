export function getRoleLabel(role) {
  switch (role) {
    case "student":
      return "Student Demo";
    case "teacher":
      return "Teacher Demo";
    case "parent":
      return "Parent Demo";
    case "school":
      return "School Demo";
    case "admin":
      return "Admin Demo";
    default:
      return role;
  }
}