import { url } from "../utility/url";

export interface Tasks {
  _id?: string;
  task?: string;
  date?: number;
  user?: string;
  isCompleted?: boolean;
  img?: string;
}

export async function fetchTasks(): Promise<Tasks[]> {
  try {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();
    return data;
  } finally {
  }
}
