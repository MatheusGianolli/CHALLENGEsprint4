


export interface IUsuario {
  id: number;
  nome: string;
  email: string;
}


export type StatusAtendimento = 'pendente' | 'em_atendimento' | 'finalizado';
export type Permissao = 'admin' | 'usuario' | 'medico';


export type IdUsuario = string | number;


export interface IDadosMedico {
  crm: string;
  especialidade: string;
}

export type PerfilMedico = IUsuario & IDadosMedico; // Interseção