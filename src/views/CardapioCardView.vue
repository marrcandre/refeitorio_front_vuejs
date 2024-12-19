<script setup>
import { ref, onMounted } from "vue";
import CardapioApi from "@/api/cardapio";

const cardapioApi = new CardapioApi();
const cardapios = ref([]);

// Mapa de nomes completos dos dias
const diasSemana = {
  SEG: "Segunda-feira",
  TER: "Terça-feira",
  QUA: "Quarta-feira",
  QUI: "Quinta-feira",
  SEX: "Sexta-feira",
};

onMounted(async () => {
  cardapios.value = await cardapioApi.buscarTodosOsCardapios();
});
</script>

<template>
  <div class="container">
    <h1>Cardápio Semanal</h1>
    <div class="cards-container">
      <div v-for="item in cardapios" :key="item.id" class="card">
        <!-- Topo com o nome do dia destacado -->
        <h2 class="dia">{{ diasSemana[item.dia] }}</h2>
        <div class="card-content">
          <p><strong>Proteína:</strong> {{ item.proteina }}</p>
          <p><strong>Opção Vegetariana:</strong> {{ item.opcao_vegetariana }}</p>
          <p><strong>Acompanhamento:</strong> {{ item.acompanhamento }}</p>
          <p><strong>Saladas:</strong> {{ item.saladas }}</p>
          <p><strong>Sobremesa:</strong> {{ item.sobremesa }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

/* Estilo para o topo do card, destacando o dia da semana */
.dia {
  font-size: 1.8rem;
  margin-bottom: 15px;
  background-color: #343a40;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
}

/* Estilo para o conteúdo do card */
.card-content {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Destaque para os campos dentro do card */
.card-content p {
  font-size: 1rem;
  margin: 10px 0;
  color: #555;
}

.card-content p strong {
  color: #343a40;
}

/* Estilo de hover no card */
.card:hover .card-content {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
