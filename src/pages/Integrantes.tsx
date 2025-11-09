import React from 'react';
import type { Integrante } from '../types/integrantes';

const equipe: Integrante[] = [
  { nome: 'Matheus Gianolli', rm: 565258, turma: '1TDSPV' },
  { nome: 'Gustavo Ribeiro', rm: 564995, turma: '1TDSPV' },
];

const getIniciais = (nome: string) =>
  nome.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();

const Integrantes: React.FC = () => {
  return (
    <section aria-labelledby="titulo-integrantes" className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h2 id="titulo-integrantes" className="text-3xl font-extrabold tracking-tight">
            Nossa Equipe
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Nome, RM e Turma
          </p>
        </div>
        <span className="rounded-full border px-3 py-1 text-xs text-gray-600 dark:text-gray-300">
          {equipe.length} integrante{equipe.length > 1 ? 's' : ''}
        </span>
      </header>

      <ul role="list" className="grid gap-4 sm:grid-cols-2">
        {equipe.map((membro) => (
          <li
            key={membro.rm}
            className="group rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur transition
                       hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60"
          >
            <div className="flex items-center gap-4">
              <div
                aria-hidden
                className="grid h-12 w-12 place-items-center rounded-full
                           bg-gradient-to-br from-emerald-400 to-teal-500
                           font-semibold text-white shadow-sm"
              >
                {getIniciais(membro.nome)}
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold">
                  {membro.nome}
                </h3>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5
                                   text-gray-700 dark:text-gray-300 dark:border-gray-700">
                    <span className="opacity-70">RM</span>
                    <span className="font-medium">{membro.rm}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5
                                   text-gray-700 dark:text-gray-300 dark:border-gray-700">
                    <span className="opacity-70">Turma</span>
                    <span className="font-medium">{membro.turma}</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Removido: footer com botão "Detalhes" */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Integrantes;
