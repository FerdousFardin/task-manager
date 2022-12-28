export interface Tasks {
  _id?: string;
  task: string;
  date: number;
  user: string;
  isCompleted: boolean;
}
export const tasks: Tasks[] = [
  {
    task: "some task 1",
    date: 1672119981484,
    user: "some user",
    isCompleted: true,
  },
  {
    task: "some task 2",
    date: 1672119980001,
    user: "some user",
    isCompleted: false,
  },
  {
    task: "some task 3",
    date: 1672119980004,
    user: "another user",
    isCompleted: true,
  },
];
