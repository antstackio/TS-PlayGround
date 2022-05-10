export type ISchoolTypes = "Blue High" | "Red University" | "Green Academy";
export interface IStudentData {
  name: string;
  rollNo: number;
  school: ISchoolTypes;
}
export type ISchoolStudentData = Record<ISchoolTypes, IStudentData[]>;
