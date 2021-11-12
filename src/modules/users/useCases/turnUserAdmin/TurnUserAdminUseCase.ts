import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userUpdate = this.usersRepository.findById(user_id);

    if (!userUpdate) {
      throw new Error("User not exists!");
    }

    const user = this.usersRepository.turnAdmin(userUpdate);

    return user;
  }
}

export { TurnUserAdminUseCase };
