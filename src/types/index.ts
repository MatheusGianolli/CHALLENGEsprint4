// em src/types/index.ts

// Interface (Critério 1.II.c)
export interface IUsuario {
  id: number;
  nome: string;
  email: string;
}

// Tipos de dados (Critério 1.II.a)
export type StatusAtendimento = 'pendente' | 'em_atendimento' | 'finalizado';
export type Permissao = 'admin' | 'usuario' | 'medico';

// Union Types (Critério 1.II.b)
export type IdUsuario = string | number;

// Intersection Types (Critério 1.II.b)
export interface IDadosMedico {
  crm: string;
  especialidade: string;
}

export type PerfilMedico = IUsuario & IDadosMedico; // Interseção