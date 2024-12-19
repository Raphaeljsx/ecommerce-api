import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id: number;
  nome: string;
  email: string;
};

const usuarios: User[] = [];

export class usersControllers {
  static async getAll(req: Request, res: Response) {
    const snapshot = await getFirestore().collection("users").get();
    const users = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(users);
  }

  static async getById(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await getFirestore().collection("users").doc(userId).get();
    res.send({ id: user.id, ...user.data()});
  }

  static async create(req: Request, res: Response) {
    const user = req.body;
    const userSalvo = await getFirestore().collection("users").add(user);
    res.send({
      message: `Usuário criado com sucesso ${userSalvo.id}!`,
    });
  }

  static async update(req: Request, res: Response) {
    const userId = req.params.id;
    const user = req.body as User;
    await getFirestore().collection("users").doc(userId).set({
      nome: user.nome,
      email: user.email,
    });
    res.send({
      message: "Usuário atualizado com sucesso",
    });
  }

  static async delete(req: Request, res: Response) {
    const userId = req.params.id;
    await getFirestore().collection("users").doc(userId).delete();
    res.send({
      message: "Usuário deletado com sucesso",
    });
  }
}
