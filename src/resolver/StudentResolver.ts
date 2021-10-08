import { ClassType } from "../services/ClassService";
import StudentService, { StudentType } from "../services/StudentService";
import TeacherService, { TeacherType } from "../services/TeacherService";

const Student = {
  advisor(parent: StudentType, _args, _context, _info): TeacherType | undefined {
    return TeacherService.getTeacherByID(parent.advisorID);
  },

  classes(parent: StudentType, _args, _context, _info): ClassType[] {
    return StudentService.getClasses(parent);
  },
};

export default Student;
