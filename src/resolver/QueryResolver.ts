import StudentService, { StudentType } from "../services/StudentService";

const Query = {
  students(): StudentType[] {
    return StudentService.getUsers();
  },

  //prettier-ignore
  student(_parent, args: {id: string}, _context, _info): StudentType | undefined {
      return StudentService.getUserByID(args.id);
    },
};

export default Query;
