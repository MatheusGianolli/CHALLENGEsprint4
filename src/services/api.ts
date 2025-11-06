// em src/services/api.ts

// Substitua pela URL da sua API Java (que deve estar no Vercel/Render/etc)
const API_BASE_URL = "https://sua-api-java.deploy.com/api";

// GET (Critério 4.I.a)
export const getRecursos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/recursos`);
    if (!response.ok) {
      throw new Error("Falha ao buscar dados."); // Tratamento de erro
    }
    const data = await response.json();
    return data; // Manipulação correta dos dados
  } catch (error) {
    console.error("Erro no GET:", error); // Tratamento de erro
    throw error;
  }
};

// POST (Critério 4.I.a)
export const createRecurso = async (dados: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recursos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Falha ao criar recurso."); // Tratamento de erro
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no POST:", error);
    throw error;
  }
};

// PUT (Critério 4.I.a)
export const updateRecurso = async (id: number, dados: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recursos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Falha ao atualizar recurso."); // Tratamento de erro
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no PUT:", error);
    throw error;
  }
};

// DELETE (Critério 4.I.a)
export const deleteRecurso = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recursos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Falha ao deletar recurso."); // Tratamento de erro
    }
    return true; // Sucesso
  } catch (error) {
    console.error("Erro no DELETE:", error);
    throw error;
  }
};