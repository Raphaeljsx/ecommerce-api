import { Request, Response } from "express";

type User = {
  id: number;
  nome: string;
  email: string;
};

let id = 0;
const usuarios: User[] = [];

export class usersControllers {
  static getAll(req: Request, res: Response) {
    res.send(usuarios);
  }

  static getById(req: Request, res: Response) {
    const userId = Number(req.params.id);
    usuarios.find((user) => user.id == userId)
      ? res.send(usuarios.find((user) => user.id == userId))
      : res.send({ message: "Usuário não encontrado" });
  }

  static create(req: Request, res: Response) {
    const user = req.body;
    user.id = id++;
    usuarios.push(user);
    res.send({
      message: "Usuário criado com sucesso",
    });
  }

  static update(req: Request, res: Response) {
    const userId = Number(req.params.id);
    const user = req.body;
    const index = usuarios.findIndex((user) => user.id == userId);
    usuarios[index].nome = user.nome;
    usuarios[index].email = user.email;
    res.send({
      message: "Usuário atualizado com sucesso",
    });
  }

  static delete(req: Request, res: Response) {
    const userId = Number(req.params.id);
    const index = usuarios.findIndex((user) => user.id == userId);
    usuarios.splice(index, 1);
    res.send({
      message: "Usuário deletado com sucesso",
    });
  }
}
