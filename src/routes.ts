import { Router } from "express";
import { CreatePixController } from "./controllers/CreatePixController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTransationController } from "./controllers/CreateTransationController";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/pix", new CreatePixController().handle);
routes.post("/transation", new CreateTransationController().handle);

export { routes };