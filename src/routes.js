import { Router } from "express";
import {
  listarLocais,
  criarLocal,
  atualizarNecessidades
} from "./controllers/locaisController.js";

const router = Router();

router.get("/locais", listarLocais);
router.post("/locais", criarLocal);
router.put("/locais/:id/necessidades", atualizarNecessidades);

export default router;