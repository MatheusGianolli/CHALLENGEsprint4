// Defina a URL base da sua API Java já publicada
const API_URL = "https://challenge-java-4sprint-1.onrender.com";

// GET (Ler dados)
export async function getRecursos() {
  try {
    const response = await fetch(`${API_URL}/recursos`);
    if (!response.ok) { // Tratamento de erro (Critério 4.a.iii)
      throw new Error('Falha ao buscar dados');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no GET:", error);
    throw error; // Propaga o erro para o componente
  }
}

// POST (Criar dado)
export async function createRecurso(novoRecurso: any) { // Use sua Interface aqui
  try {
    const response = await fetch(`${API_URL}/recursos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoRecurso),
    });
    if (!response.ok) {
      throw new Error('Falha ao criar recurso');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no POST:", error);
    throw error;
  }
}

// PUT (Atualizar dado)
export async function updateRecurso(id: string, recursoAtualizado: any) {
  try {
    const response = await fetch(`${API_URL}/recursos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recursoAtualizado),
    });
    if (!response.ok) {
      throw new Error('Falha ao atualizar recurso');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no PUT:", error);
    throw error;
  }
}

// DELETE (Deletar dado)
export async function deleteRecurso(id: string) {
  try {
    const response = await fetch(`${API_URL}/recursos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Falha ao deletar recurso');
    }
    // Delete geralmente retorna status 204 (No Content)
    return { success: true }; 
  } catch (error) {
    console.error("Erro no DELETE:", error);
    throw error;
  }
}
// src/services/api.ts
// ... (abaixo das outras funções mockadas) ...

// Interface para os dados do formulário de contato
interface MensagemDeContato {
  nome: string;
  email: string;
  mensagem: string;
}

