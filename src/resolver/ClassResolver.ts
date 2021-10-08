import { ClassType } from "../services/ClassService";
import StudentService, { StudentType } from "../services/StudentService";
import TeacherService, { TeacherType } from "../services/TeacherService";

const Class = {
  teacher(parent: ClassType, _args, _context, _info): TeacherType | undefined {
    return TeacherService.getTeacherByClass(parent);
  },

  students(parent: ClassType, _args, _context, _info): StudentType[] {
    return StudentService.getStudentByClass(parent);
  },
};

export default Class;
