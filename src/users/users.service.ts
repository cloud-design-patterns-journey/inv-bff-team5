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
      password: "muchwaou",
    },
    {
      userId: 2,
      username: "maria",
      password: "guess",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
