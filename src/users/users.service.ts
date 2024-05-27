import { Injectable } from "@nestjs/common";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // In a real production app, don't do this of course.
  private readonly users = [
    {
      userId: 1,
      username: "doge",
      password: "$2b$12$HI2FO8fF0/rjoYK8CqoNWuLfRUVQc47qejtiBsHNMbZukofyh15NG",
    },
    {
      userId: 2,
      username: "maria",
      password: "$2b$12$HI2FO8fF0/rjoYK8CqoNWuHweLtrDHtOtVMBihdUWbZiJYMYUWFg.",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
