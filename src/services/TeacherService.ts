import classes from "../repository/ClassRepository";
import teachers from "../repository/TeacherRepository";
import { ClassType } from "./ClassService";

export interface TeacherType {
  id: string;
  name: string;
  surname: string;
  age: number;
  country: string;
  title?: string;
  enrolledClasses: string[];
}

class TeacherService {
  static getTeacherByID(id: string): TeacherType | undefined {
    return teachers.find((teacher) => teacher.id === id);
  }

  static getTeacherByClass(_class: ClassType): TeacherType | undefined {
    return teachers.find((teacher) =>
      teacher.enrolledClasses.find((teacherClass) => teacherClass === _class.id)
    );
  }

  static getTeachers(): TeacherType[] {
    return teachers;
  }
}

export default TeacherService;
