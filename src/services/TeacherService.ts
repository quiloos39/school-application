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

/**
 * Used for handling teacher related operations.
 */
class TeacherService {
  /**
   * Gets teacher from given ID.
   */
  static getTeacherByID(id: string): TeacherType | undefined {
    return teachers.find((teacher) => teacher.id === id);
  }

  /**
   * Gets teacher by class.
   */
  static getTeacherByClass(_class: ClassType): TeacherType | undefined {
    return teachers.find((teacher) =>
      teacher.enrolledClasses.find((teacherClass) => teacherClass === _class.id)
    );
  }

  /**
   * Gets all teachers.
   */
  static getTeachers(): TeacherType[] {
    return teachers;
  }
}

export default TeacherService;
