import classes from "../repository/ClassRepository";
import students from "../repository/StudentRepository";
import { ClassType } from "./ClassService";

export interface StudentType {
  id: string;
  name: string;
  surname: string;
  age: number;
  country: string;
  title?: string;
  advisorID: string;
  enrolledClasses: string[];
}

/**
 * Responsible for handling user related operations
 */
class StudentService {
  static getUserByID(studentID: string): StudentType | undefined {
    return students.find((student) => student.id === studentID);
  }

  static getStudentByClass(parent: ClassType): StudentType[] {
    return students.filter((student) =>
      student.enrolledClasses.find((_class) => _class === parent.id)
    );
  }

  static getUsers(): StudentType[] {
    return students;
  }

  static getClasses(student: StudentType): ClassType[] {
    return classes.filter((_class) =>
      student.enrolledClasses.find((studentClass) => studentClass === _class.id)
    );
  }
}

export default StudentService;
