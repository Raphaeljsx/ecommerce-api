import { Express } from "express";
import express from "express";
import { userRoutes } from "./user.route";

export const routes = (app: Express) => {
  app.use(express.json());
  app.use(userRoutes);
}