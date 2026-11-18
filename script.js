const questions = [
  {
    area: "Língua Portuguesa",
    topic: "Interpretação de texto",
    prompt: "Em uma clínica, o aviso diz: “Os animais devem aguardar na recepção acompanhados de seus tutores.” O que o aviso orienta?",
    options: [
      "Que os animais podem esperar sozinhos na recepção.",
      "Que cada animal deve esperar com a pessoa responsável por ele.",
      "Que apenas os tutores devem aguardar na recepção.",
      "Que os animais devem esperar dentro da sala de atendimento."
    ],
    answer: 1,
    explanation: "O aviso informa que o animal deve permanecer na recepção junto de seu tutor.",
    tip: "Ao ler um texto, identifique primeiro quem faz a ação e em que condição. Depois, procure a ideia principal com suas próprias palavras."
  },
  {
    area: "Língua Portuguesa",
    topic: "Ortografia",
    prompt: "Qual frase está escrita corretamente?",
    options: [
      "A equipe trouxe os materiais para o atendimento.",
      "A equipe trousse os materiais para o atendimento.",
      "A equipe trouxe os material para o atendimento.",
      "A equipe trouxe os materiais para o atendimênto."
    ],
    answer: 0,
    explanation: "“Trouxe” é a forma correta do verbo trazer, e “materiais” concorda com o artigo no plural.",
    tip: "Revise palavras que costumam gerar dúvida e confira a concordância entre artigo, substantivo e verbo."
  },
  {
    area: "Língua Portuguesa",
    topic: "Pontuação",
    prompt: "Qual alternativa pontua corretamente a frase?",
    options: [
      "Antes do atendimento a equipe, organizou a sala.",
      "Antes, do atendimento a equipe organizou a sala.",
      "Antes do atendimento, a equipe organizou a sala.",
      "Antes do atendimento a equipe organizou, a sala."
    ],
    answer: 2,
    explanation: "A vírgula separa a expressão adverbial deslocada (“Antes do atendimento”) do restante da oração.",
    tip: "Leia a frase em voz alta e observe as pausas. Estude especialmente a vírgula em expressões que aparecem no início da oração."
  },
  {
    area: "Língua Portuguesa",
    topic: "Concordância verbal",
    prompt: "Complete a frase com a forma verbal adequada: “Os prontuários da clínica ___ organizados por data.”",
    options: ["está", "estão", "estava", "estaria"],
    answer: 1,
    explanation: "O sujeito “Os prontuários” está no plural; por isso, o verbo também fica no plural: “estão”.",
    tip: "Encontre o sujeito da frase e confira se ele está no singular ou no plural antes de escolher o verbo."
  },
  {
    area: "Matemática",
    topic: "Porcentagem",
    prompt: "Um pacote de ração custa R$ 80,00 e recebeu desconto de 25%. Qual é o novo preço?",
    options: ["R$ 55,00", "R$ 60,00", "R$ 65,00", "R$ 75,00"],
    answer: 1,
    explanation: "25% de R$ 80,00 são R$ 20,00. Subtraindo o desconto, o preço final é R$ 60,00.",
    tip: "Para calcular uma porcentagem, transforme-a em fração ou decimal. Calcule o desconto e subtraia do valor inicial."
  },
  {
    area: "Matemática",
    topic: "Proporção",
    prompt: "Uma receita usa 2 medidas de concentrado para 6 medidas de água. Mantendo a proporção, quantas medidas de água são necessárias para 5 medidas de concentrado?",
    options: ["10", "12", "15", "18"],
    answer: 2,
    explanation: "A proporção é de 3 medidas de água para cada medida de concentrado. Assim, 5 × 3 = 15.",
    tip: "Simplifique a razão inicial dividindo os dois valores pelo mesmo número. Depois, multiplique para encontrar a quantidade equivalente."
  },
  {
    area: "Matemática",
    topic: "Regra de três",
    prompt: "Uma equipe organiza 12 fichas em 20 minutos, mantendo um ritmo constante. Quanto tempo levará para organizar 30 fichas?",
    options: ["40 minutos", "45 minutos", "50 minutos", "60 minutos"],
    answer: 2,
    explanation: "Cada ficha leva 20 ÷ 12 minutos. Para 30 fichas: 30 × 20 ÷ 12 = 50 minutos.",
    tip: "Quando as duas quantidades aumentam juntas, monte uma proporção direta. Organize os dados na mesma ordem antes de multiplicar."
  },
  {
    area: "Matemática",
    topic: "Unidades de medida",
    prompt: "Uma consulta começou às 14h35 e terminou às 15h20. Quanto tempo durou?",
    options: ["35 minutos", "40 minutos", "45 minutos", "55 minutos"],
    answer: 2,
    explanation: "De 14h35 até 15h00 são 25 minutos; de 15h00 até 15h20 são mais 20. Total: 45 minutos.",
    tip: "Separe a contagem em partes: avance até a próxima hora cheia e depois some os minutos restantes."
  },
  {
    area: "Biologia",
    topic: "Células",
    prompt: "Qual estrutura celular é conhecida como responsável pela produção de energia para as atividades da célula?",
    options: ["Mitocôndria", "Núcleo", "Membrana plasmática", "Ribossomo"],
    answer: 0,
    explanation: "As mitocôndrias participam da respiração celular, processo que disponibiliza energia para a célula.",
    tip: "Revise as funções das principais estruturas celulares, relacionando cada organela ao que ela faz."
  },
  {
    area: "Biologia",
    topic: "Sistemas do corpo",
    prompt: "Qual sistema transporta oxigênio e nutrientes pelo corpo por meio do sangue?",
    options: ["Digestório", "Circulatório", "Nervoso", "Esquelético"],
    answer: 1,
    explanation: "O sistema circulatório movimenta o sangue, que transporta oxigênio e nutrientes pelo organismo.",
    tip: "Estude os sistemas do corpo e as funções de cada um. Mapas que conectam órgãos e funções ajudam na revisão."
  },
  {
    area: "Biologia",
    topic: "Ecologia",
    prompt: "Na cadeia alimentar “capim → coelho → raposa”, qual organismo é o produtor?",
    options: ["O capim", "O coelho", "A raposa", "Todos são consumidores"],
    answer: 0,
    explanation: "O capim produz seu próprio alimento por meio da fotossíntese e, por isso, é produtor.",
    tip: "Em cadeias alimentares, procure o ser vivo que produz o próprio alimento: ele costuma ser a base da cadeia."
  },
  {
    area: "Biologia",
    topic: "Prevenção de doenças",
    prompt: "Por que a vacinação de animais, conforme a orientação de um profissional veterinário, é importante?",
    options: [
      "Porque substitui todos os cuidados de higiene.",
      "Porque ajuda a prevenir doenças e reduz o risco de transmissão de algumas delas.",
      "Porque garante que o animal nunca ficará doente.",
      "Porque dispensa consultas veterinárias futuras."
    ],
    answer: 1,
    explanation: "Vacinas ajudam a proteger contra doenças específicas, mas não garantem proteção contra todas as doenças nem substituem outros cuidados.",
    tip: "Diferencie prevenção de garantia absoluta: vacinas são importantes, mas fazem parte de um conjunto de cuidados."
  },
  {
    area: "Química e Ciências",
    topic: "Misturas",
    prompt: "Qual exemplo representa uma mistura homogênea?",
    options: ["Água e óleo", "Areia e pedrinhas", "Água com sal dissolvido", "Suco com pedaços de fruta"],
    answer: 2,
    explanation: "Quando o sal está dissolvido, a mistura apresenta uma única fase visível e aspecto uniforme.",
    tip: "Mistura homogênea tem aspecto uniforme e uma fase visível; na heterogênea, é possível perceber mais de uma fase."
  },
  {
    area: "Química e Ciências",
    topic: "Estados físicos",
    prompt: "Quando o gelo derrete e vira água líquida, ocorre:",
    options: ["Solidificação", "Evaporação", "Fusão", "Condensação"],
    answer: 2,
    explanation: "Fusão é a mudança do estado sólido para o líquido, como acontece quando o gelo derrete.",
    tip: "Associe cada mudança de estado ao seu sentido: fusão (sólido para líquido), evaporação (líquido para gasoso)."
  },
  {
    area: "Química e Ciências",
    topic: "pH",
    prompt: "Em uma escala de pH, uma substância com pH menor que 7 é considerada:",
    options: ["Ácida", "Neutra", "Básica", "Sempre segura para consumo"],
    answer: 0,
    explanation: "Em geral, pH menor que 7 indica acidez; pH igual a 7 é neutro e maior que 7 é básico.",
    tip: "Memorize a referência da escala: abaixo de 7 é ácido, 7 é neutro e acima de 7 é básico."
  },
  {
    area: "Química e Ciências",
    topic: "Método científico",
    prompt: "Em uma investigação científica, para que serve uma hipótese?",
    options: [
      "Para apresentar uma explicação provisória que pode ser investigada.",
      "Para substituir a coleta de dados.",
      "Para garantir que o resultado esperado esteja correto.",
      "Para registrar somente a conclusão final."
    ],
    answer: 0,
    explanation: "Uma hipótese é uma explicação ou previsão provisória que pode ser testada com observações ou experimentos.",
    tip: "Relembre as etapas básicas de uma investigação: pergunta, hipótese, teste, análise dos resultados e conclusão."
  },
  {
    area: "Raciocínio Lógico",
    topic: "Sequências",
    prompt: "Qual é o próximo número da sequência: 3, 6, 12, 24, ___?",
    options: ["30", "36", "42", "48"],
    answer: 3,
    explanation: "Cada número é o dobro do anterior. Portanto, 24 × 2 = 48.",
    tip: "Compare os termos consecutivos para identificar se a sequência soma, subtrai, multiplica ou alterna uma regra."
  },
  {
    area: "Raciocínio Lógico",
    topic: "Dedução",
    prompt: "Todos os cães da sala de espera estão com coleira. Bento é um cão na sala de espera. O que se pode concluir?",
    options: [
      "Bento está com coleira.",
      "Bento está doente.",
      "Todos os animais da sala são cães.",
      "Bento já foi atendido."
    ],
    answer: 0,
    explanation: "Se todos os cães da sala estão com coleira e Bento é um deles, então Bento está com coleira.",
    tip: "Em questões de dedução, use apenas o que foi informado. Não acrescente conclusões que parecem prováveis, mas não foram dadas."
  },
  {
    area: "Raciocínio Lógico",
    topic: "Problemas com horários",
    prompt: "Uma pessoa chega à clínica às 9h10. O atendimento começa 35 minutos depois. A que horas começa?",
    options: ["9h35", "9h40", "9h45", "10h05"],
    answer: 2,
    explanation: "Somando 35 minutos a 9h10, o atendimento começa às 9h45.",
    tip: "Some os minutos primeiro e, ao ultrapassar 60, converta o excedente em uma hora."
  },
  {
    area: "Raciocínio Lógico",
    topic: "Análise de informações",
    prompt: "Em uma caixa há 4 fichas azuis e 6 verdes. Sem olhar, qual cor tem maior chance de ser retirada?",
    options: ["Azul", "Verde", "As duas têm a mesma chance", "Não é possível comparar"],
    answer: 1,
    explanation: "Há mais fichas verdes (6) do que azuis (4), então a chance de retirar uma ficha verde é maior.",
    tip: "Para comparar chances em situações simples, conte quantos resultados favoráveis existem para cada opção."
  }
];

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const questionCount = document.querySelector("#question-count");
const areaBadge = document.querySelector("#area-badge");
const questionTitle = document.querySelector("#question-title");
const answersContainer = document.querySelector("#answers");
const progressFill = document.querySelector("#progress-fill");
const progressTrack = document.querySelector(".progress-track");
const answeredCount = document.querySelector("#answered-count");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const finishButton = document.querySelector("#finish-button");
const quizHint = document.querySelector("#quiz-hint");

let currentQuestion = 0;
let selectedAnswers = Array(questions.length).fill(null);

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;
  const completed = selectedAnswers.filter((answer) => answer !== null).length;

  questionCount.textContent = `QUESTÃO ${String(number).padStart(2, "0")} DE ${questions.length}`;
  areaBadge.textContent = question.area.toLocaleUpperCase("pt-BR");
  questionTitle.textContent = question.prompt;
  progressFill.style.width = `${(completed / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(completed));
  answeredCount.textContent = `${completed} de ${questions.length} respondidas`;
  previousButton.disabled = currentQuestion === 0;
  nextButton.classList.toggle("hidden", currentQuestion === questions.length - 1);
  finishButton.classList.toggle("hidden", currentQuestion !== questions.length - 1);
  finishButton.disabled = completed !== questions.length;
  quizHint.textContent = completed === questions.length
    ? ""
    : currentQuestion === questions.length - 1
      ? "Responda todas as questões para ver seu resultado."
      : "";

  answersContainer.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    const text = document.createElement("span");

    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", String(selectedAnswers[currentQuestion] === index));
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    text.textContent = option;
    button.append(letter, text);
    button.addEventListener("click", () => {
      selectedAnswers[currentQuestion] = index;
      renderQuestion();
      answersContainer.querySelectorAll(".answer-option")[index].focus();
    });
    answersContainer.append(button);
  });
}

function getAreaStats() {
  const stats = new Map();
  questions.forEach((question, index) => {
    const area = stats.get(question.area) ?? { correct: 0, total: 0 };
    area.total += 1;
    if (selectedAnswers[index] === question.answer) area.correct += 1;
    stats.set(question.area, area);
  });
  return stats;
}

function renderResults() {
  const correctCount = questions.reduce(
    (total, question, index) => total + Number(selectedAnswers[index] === question.answer),
    0
  );
  const percentage = Math.round((correctCount / questions.length) * 100);
  const stats = getAreaStats();
  const missedQuestions = questions
    .map((question, index) => ({ ...question, index }))
    .filter((question) => selectedAnswers[question.index] !== question.answer);

  document.querySelector("#score-value").textContent = `${percentage}%`;
  document.querySelector("#results-intro").textContent =
    `Você acertou ${correctCount} de ${questions.length} questões. Veja seus pontos fortes e escolha por onde continuar estudando.`;

  const summary = document.querySelector("#result-summary");
  if (percentage >= 80) {
    summary.textContent = "Você demonstrou uma boa base nos conteúdos deste simulado. Continue revisando os temas que errou e mantenha uma rotina de estudos.";
  } else if (percentage >= 50) {
    summary.textContent = "Você já tem uma base em vários conteúdos e pode avançar com uma revisão direcionada. As dicas abaixo ajudam a priorizar os próximos estudos.";
  } else {
    summary.textContent = "Este resultado é um retrato do que vale revisar, não um limite para o que você pode aprender. Comece pelas dicas abaixo e pratique um pouco de cada vez.";
  }

  const areaResults = document.querySelector("#area-results");
  areaResults.replaceChildren();
  stats.forEach((area, name) => {
    const item = document.createElement("div");
    item.className = "area-result";
    const header = document.createElement("div");
    header.className = "area-result-header";
    const label = document.createElement("span");
    const score = document.createElement("strong");
    const track = document.createElement("div");
    const fill = document.createElement("span");
    label.textContent = name;
    score.textContent = `${area.correct}/${area.total}`;
    track.className = "area-track";
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `Acertos em ${name}`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", String(area.total));
    track.setAttribute("aria-valuenow", String(area.correct));
    fill.style.width = `${(area.correct / area.total) * 100}%`;
    header.append(label, score);
    track.append(fill);
    item.append(header, track);
    areaResults.append(item);
  });

  const tipsList = document.querySelector("#tips-list");
  tipsList.replaceChildren();
  if (missedQuestions.length === 0) {
    const tip = document.createElement("p");
    tip.className = "tip-item";
    tip.textContent = "Você acertou todas! Continue estudando e revisite os assuntos para manter o conhecimento.";
    tipsList.append(tip);
  } else {
    const uniqueTips = new Map();
    missedQuestions.forEach((question) => {
      if (!uniqueTips.has(question.topic)) uniqueTips.set(question.topic, question);
    });
    [...uniqueTips.values()].slice(0, 5).forEach((question) => {
      const item = document.createElement("div");
      item.className = "tip-item";
      const icon = document.createElement("span");
      icon.className = "tip-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "↗";
      const text = document.createElement("p");
      const title = document.createElement("strong");
      title.textContent = `${question.topic}: `;
      text.append(title, document.createTextNode(question.tip));
      item.append(icon, text);
      tipsList.append(item);
    });
  }

  const reviewList = document.querySelector("#review-list");
  reviewList.replaceChildren();
  questions.forEach((question, index) => {
    const item = document.createElement("article");
    item.className = "review-item";
    const title = document.createElement("h4");
    const response = document.createElement("p");
    const correct = document.createElement("p");
    const explanation = document.createElement("p");
    title.textContent = `${String(index + 1).padStart(2, "0")}. ${question.prompt}`;
    response.textContent = `Sua resposta: ${question.options[selectedAnswers[index]]}`;
    correct.className = "correct-answer";
    correct.textContent = `Resposta correta: ${question.options[question.answer]}`;
    explanation.textContent = question.explanation;
    item.append(title, response, correct, explanation);
    reviewList.append(item);
  });

  quiz.classList.add("hidden");
  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#results-title").focus({ preventScroll: true });
}

document.querySelector("#start-button").addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
  quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  questionTitle.focus({ preventScroll: true });
});

previousButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
    questionTitle.focus();
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    questionTitle.focus();
  }
});

finishButton.addEventListener("click", renderResults);

document.querySelector("#restart-button").addEventListener("click", () => {
  currentQuestion = 0;
  selectedAnswers = Array(questions.length).fill(null);
  results.classList.add("hidden");
  intro.classList.remove("hidden");
  document.querySelector("#review-list").replaceChildren();
  intro.scrollIntoView({ behavior: "smooth", block: "start" });
});
