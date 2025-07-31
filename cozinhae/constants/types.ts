export interface IngredienteBase {
  id: number;
  nomesIngrediente: string[];
  receita_id: number;
  created_at: string;
}

export interface Receita {
  id: number;
  receita: string;
  ingredientes: string;
  modo_preparo: string;
  link_imagem: string;
  tipo: string;
  created_at: string;
  IngredientesBase: IngredienteBase[];
}
