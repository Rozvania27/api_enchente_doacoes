import { locais } from "../data/db.js";

export function listarLocais(req, res) {
  res.json(locais);
}

export function criarLocal(req, res) {
  const { nome, endereco } = req.body;

  if (!nome || !endereco) {
    return res.status(400).json({ erro: "Nome e endereço são obrigatórios" });
  }

  const novoLocal = {
    id: locais.length + 1,
    nome,
    endereco,
    necessidades: []
  };

  locais.push(novoLocal);

  res.status(201).json(novoLocal);
}

export function atualizarNecessidades(req, res) {
  const { id } = req.params;
  const { necessidades } = req.body;

  const local = locais.find(l => l.id == id);

  if (!local) {
    return res.status(404).json({ erro: "Local não encontrado" });
  }

  local.necessidades = necessidades;

  res.json(local);
}