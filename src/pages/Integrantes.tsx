import React from 'react';
import type { Integrante } from '../types/integrantes';

// Lista de integrantes (eventualmente virá da API)
const equipe: Integrante[] = [
  { nome: 'Matheus Gianolli', rm: 565258, turma: '1TDSPV' },
  { nome: 'Integrante 2', rm: 54321, turma: '1TDX' },
];

const Integrantes: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Nossa Equipe</h2>
      <ul>
        {equipe.map((membro) => (
          <li key={membro.rm}>
            {/* Penalidade: Mostrar Nome, RM e Turma */}
            <strong>{membro.nome}</strong> (RM: {membro.rm}, Turma: {membro.turma})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Integrantes;