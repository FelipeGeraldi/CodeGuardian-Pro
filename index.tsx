
// This file should be renamed to index.js

import * as THREE from 'three';

const characters = {
  professorBugsy: {
    name: "Professor Bugsy",
    emoji: "🐞" 
  }
};

// Initial Data - Based on "Certified Tester Foundation Level Syllabus"
const syllabusData = [
  {
    id: "ch1",
    title: "Capítulo 1: Fundamentos de Teste",
    characterIcon: "📚", 
    description: "Aprenda o básico sobre testes de software.",
    lessons: [
      {
        id: "1.1",
        title: "1.1 O que é teste?",
        icon: "❓", 
        locked: false,
        completed: false,
        slides: [
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Olá, futuro Mestre dos Testes! 👋 Sou a Professora Bugsy! Software está em tudo: celulares, computadores, até na TV! Mas... e quando ele falha? Pode ser um problemão! Perder tempo, dinheiro... um caos!"
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Por isso, o Teste de Software é nosso super-herói! Ele nos ajuda a verificar a qualidade do software e a reduzir os riscos de falhas chatas. Vamos descobrir juntos como ele faz essa mágica?"
          },
          {
            type: 'quiz',
            character: 'professorBugsy',
            question: "Qual o principal objetivo do Teste de Software, segundo a Professora Bugsy?",
            options: [
              { text: "Escrever código mais rápido.", correct: false },
              { text: "Avaliar a qualidade do software e reduzir riscos.", correct: true },
              { text: "Criar designs de interface bonitos.", correct: false },
              { text: "Vender mais produtos de software.", correct: false }
            ],
            feedbackCorrect: "Exato! Você está pegando o jeito! 🥳",
            feedbackIncorrect: "Opa! Quase lá! A ideia principal é garantir a qualidade e segurança.",
            explanation: "Testar software busca avaliar sua qualidade e diminuir a chance de problemas quando estiver em uso."
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "O teste de software não é apenas executar o software e verificar os resultados. Envolve também atividades como planejamento, análise, modelagem e implementação de testes. Uma visão completa!"
          },
          {
            type: 'quiz',
            character: 'professorBugsy',
            question: "O teste de software se resume apenas à execução de testes?",
            options: [
              { text: "Sim, é a única atividade importante.", correct: false },
              { text: "Não, envolve outras atividades como planejamento e análise.", correct: true },
              { text: "Sim, desde que seja feito por desenvolvedores.", correct: false }
            ],
            feedbackCorrect: "Correto! Testar é um processo com várias etapas importantes. ✨",
            feedbackIncorrect: "Na verdade, a execução é só uma parte! Há muito mais por trás dos panos.",
            explanation: "O teste de software é um processo que inclui diversas atividades, como planejamento, monitoramento, controle, análise, modelagem, implementação, execução e conclusão."
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Ótimo trabalho! Lembre-se, testar é um processo multifacetado! Continuaremos explorando isso. ✨"
          }
        ]
      },
      { 
        id: "1.2", 
        title: "1.2 Por que os testes são necessários?", 
        icon: "💡", 
        locked: true, 
        completed: false, 
        slides: [
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Então, por que testar é tão crucial? 🤔 Pense nos testes como guardiões da qualidade! Eles ajudam a entregar projetos no prazo, dentro do orçamento e com a qualidade que todos esperam."
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Encontrar defeitos cedo é super econômico! 💰 Corrigir um probleminha no início é muito mais fácil e barato do que consertar um problemão depois que o software já foi lançado. Testes ajudam indiretamente a termos softwares de maior qualidade!"
          },
           {
            type: 'quiz',
            character: 'professorBugsy',
            question: "Por que é considerado econômico encontrar defeitos cedo no ciclo de desenvolvimento?",
            options: [
              { text: "Porque os testadores cobram menos no início.", correct: false },
              { text: "Porque é mais fácil e barato corrigir defeitos em fases iniciais.", correct: true },
              { text: "Porque os usuários não percebem defeitos em versões iniciais.", correct: false },
              { text: "Porque defeitos iniciais não impactam o cronograma.", correct: false }
            ],
            feedbackCorrect: "Isso mesmo! Economia inteligente! 💸",
            feedbackIncorrect: "Pense no esforço para consertar algo pequeno versus algo grande e já estabelecido.",
            explanation: "Identificar e corrigir defeitos em estágios iniciais do ciclo de vida de desenvolvimento de software é significativamente menos custoso do que corrigi-los em fases posteriores ou após o lançamento."
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "E tem mais! Testes dão uma 'espiadinha' na qualidade do software em várias etapas. Isso ajuda a decidir se o software está pronto para o próximo nível ou para ser lançado! 🚀"
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Você já ouviu falar em QA (Garantia da Qualidade)? Teste e QA são parceiros, mas não são a mesma coisa! Teste é uma forma de Controle de Qualidade (QC), focado em encontrar defeitos no produto. Já o QA é mais amplo, focado em melhorar os processos para prevenir defeitos. Todos no projeto são responsáveis pelo QA!"
          },
          {
            type: 'quiz',
            character: 'professorBugsy',
            question: "Qual a diferença principal entre Teste (como QC) e QA (Garantia da Qualidade)?",
            options: [
              { text: "Teste foca nos processos, QA foca no produto.", correct: false },
              { text: "Teste é sobre encontrar defeitos no produto, QA é sobre melhorar processos para prevenir defeitos.", correct: true },
              { text: "São exatamente a mesma coisa.", correct: false },
              { text: "Apenas testadores fazem QA.", correct: false }
            ],
            feedbackCorrect: "Brilhante! ✨ Você entendeu a parceria entre eles!",
            feedbackIncorrect: "Hmm, reveja a dica! Teste é mais 'mão na massa' no produto, e QA é mais sobre o 'como fazer'.",
            explanation: "O Teste (como Controle de Qualidade) foca em identificar defeitos no software. A Garantia da Qualidade (QA) é mais abrangente, visando aprimorar os processos de desenvolvimento e teste para evitar que defeitos ocorram."
          },
          {
            type: 'content',
            character: 'professorBugsy',
            text: "Humanos cometem erros (equívocos), que geram defeitos (bugs), que podem causar falhas no software. Analisar a causa raiz desses erros nos ajuda a evitar que aconteçam de novo! É como aprender com os tropeços. 😉"
          },
          {
            type: 'quiz',
            character: 'professorBugsy',
            question: "O que é uma 'causa raiz' de um defeito?",
            options: [
              { text: "A primeira falha observada pelo usuário.", correct: false },
              { text: "O motivo fundamental para a ocorrência de um problema.", correct: true },
              { text: "O defeito em si, também conhecido como bug.", correct: false },
              { text: "A consequência do defeito no sistema.", correct: false }
            ],
            feedbackCorrect: "Exatamente! Encontrar a raiz ajuda a evitar que o problema cresça de novo! 🌱",
            feedbackIncorrect: "Pense na origem, na razão fundamental pela qual o erro aconteceu.",
            explanation: "A causa raiz é o motivo fundamental que levou à ocorrência de um erro e, consequentemente, a um defeito. Identificar e corrigir a causa raiz ajuda a prevenir defeitos semelhantes no futuro."
          }
        ] 
      },
      { 
        id: "1.3", 
        title: "1.3 Princípios de Teste", 
        icon: "📜", 
        locked: true, 
        completed: false, 
        slides: [
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Existem alguns 'mandamentos' no mundo dos testes, são os 7 Princípios de Teste! Eles são como um mapa do tesouro para testar de forma eficaz. Vamos conhecê-los?"
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 1: Teste mostra a presença de defeitos, não a ausência. 🤯 Mesmo que testemos muito e não achemos nada, não podemos garantir 100% que não existem defeitos escondidos!"
            },
            {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Se, após extensivos testes, nenhum defeito for encontrado, podemos afirmar que o software está 100% livre de defeitos?",
                options: [
                  { text: "Sim, se os testes cobriram todas as funcionalidades.", correct: false },
                  { text: "Não, o teste apenas reduz a probabilidade de defeitos remanescentes.", correct: true },
                  { text: "Sim, se foram usados testadores experientes.", correct: false }
                ],
                feedbackCorrect: "Correto! O teste nos dá confiança, mas não certeza absoluta da ausência de defeitos.",
                feedbackIncorrect: "Lembre-se do Princípio 1: Teste mostra a presença, não a ausência.",
                explanation: "O Princípio 1 afirma que o teste pode revelar a presença de defeitos, mas não pode provar sua ausência total. Mesmo testes rigorosos podem não encontrar todos os defeitos."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 2: Testes exaustivos são impossíveis. ⏳ Testar TUDO (todas as combinações, todas as entradas) levaria uma eternidade! Por isso, usamos técnicas e priorização para focar no mais importante."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 3: Testes antecipados economizam tempo e dinheiro. 💰 Lembra que falamos disso? Encontrar e corrigir defeitos no início é muito mais barato do que no final do projeto."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 4: Os defeitos se agrupam.  Clustering! 🐞🐞🐞 É comum que uma pequena parte do sistema contenha a maioria dos defeitos. Ficar de olho nessas áreas é uma boa estratégia!"
            },
             {
                type: 'quiz',
                character: 'professorBugsy',
                question: "O que significa o princípio 'Os defeitos se agrupam'?",
                options: [
                  { text: "Os defeitos aparecem todos de uma vez.", correct: false },
                  { text: "A maioria dos defeitos tende a se concentrar em um pequeno número de módulos ou componentes.", correct: true },
                  { text: "Todos os defeitos são do mesmo tipo.", correct: false },
                  { text: "É preciso agrupar os defeitos por severidade.", correct: false }
                ],
                feedbackCorrect: "Exato! Focar nessas áreas de 'clustering' é uma tática inteligente!",
                feedbackIncorrect: "Pense onde os 'bichinhos' (bugs) gostam de se esconder em grupo!",
                explanation: "O Princípio 4 (Os defeitos se agrupam) indica que uma pequena quantidade de módulos ou componentes geralmente contém a maioria dos defeitos descobertos ou é responsável pela maioria das falhas operacionais (Princípio de Pareto)."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 5: Os testes se degradam (Paradoxo do Pesticida). 🐛 Se repetirmos os mesmos testes várias vezes, eles perdem a eficácia para encontrar novos defeitos. É preciso variar e atualizar os testes!"
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 6: Os testes dependem do contexto. 🌐 Não existe uma receita de bolo única para testar! O jeito de testar um app de banco é diferente de testar um jogo, por exemplo."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Princípio 7: Falácia da ausência de defeitos. ✔️ Mesmo que um software não tenha nenhum defeito técnico, ele pode não atender às necessidades do usuário ou ser inútil. Qualidade vai além de 'sem bugs'!"
            },
            {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Qual princípio de teste nos diz que se usarmos sempre os mesmos testes, eles podem parar de encontrar novos defeitos?",
                options: [
                  { text: "Teste mostra a presença de defeitos.", correct: false },
                  { text: "Os defeitos se agrupam.", correct: false },
                  { text: "Os testes se degradam (Paradoxo do Pesticida).", correct: true },
                  { text: "Testes dependem do contexto.", correct: false }
                ],
                feedbackCorrect: "Isso aí! Você está afiado nos princípios! 🎯",
                feedbackIncorrect: "Pense como um fazendeiro usando o mesmo pesticida sempre... os insetos podem ficar resistentes! 😉",
                explanation: "O Paradoxo do Pesticida (Princípio 5) alerta que repetir os mesmos testes continuamente os torna menos eficazes para descobrir novos defeitos, pois o sistema pode ter sido corrigido para esses casos específicos."
            }
        ]
      },
      { 
        id: "1.4", 
        title: "1.4 Atividades de teste, Testware e Papéis de teste", 
        icon: "🛠️", 
        locked: true, 
        completed: false, 
        slides: [
            {
                type: 'content',
                character: 'professorBugsy',
                text: "O processo de teste é uma jornada com várias paradas! Temos 7 atividades principais: Planejamento, Monitoramento e Controle, Análise, Modelagem (Design), Implementação, Execução e Conclusão."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "No Planejamento, definimos o que e como testar. Monitoramento e Controle é ficar de olho no progresso. Análise é entender a base do teste. Modelagem é criar os casos de teste. Implementação é preparar tudo para rodar. Execução é... rodar os testes! E Conclusão é finalizar e aprender."
            },
             {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Qual das atividades de teste é responsável por definir os objetivos do teste e selecionar uma abordagem?",
                options: [
                  { text: "Execução de Teste", correct: false },
                  { text: "Planejamento de Teste", correct: true },
                  { text: "Análise de Teste", correct: false },
                  { text: "Conclusão de Teste", correct: false }
                ],
                feedbackCorrect: "Correto! Um bom plano é o começo de tudo!",
                feedbackIncorrect: "Pense na primeira etapa, onde definimos o 'mapa' da nossa jornada de testes.",
                explanation: "O Planejamento do Teste consiste em definir os objetivos do teste e selecionar uma abordagem que melhor atinja esses objetivos dentro das restrições do contexto."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "E o que é Testware? São todos os artefatos produzidos durante o teste: planos de teste, casos de teste, scripts, dados de teste, relatórios... tudo que usamos e criamos!"
            },
            {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Um script de teste automatizado é considerado um exemplo de quê?",
                options: [
                  { text: "Base de Teste", correct: false },
                  { text: "Testware", correct: true },
                  { text: "Objeto de Teste", correct: false },
                  { text: "Condição de Teste", correct: false }
                ],
                feedbackCorrect: "Isso aí! Testware são as ferramentas e documentos do testador!",
                feedbackIncorrect: "Pense nos 'materiais' que usamos ou criamos para testar.",
                explanation: "Testware inclui todos os produtos de trabalho criados durante o processo de teste, como planos de teste, casos de teste, scripts de teste (manuais ou automatizados), dados de teste, e relatórios de teste."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Nosso time de heróis dos testes geralmente tem dois papéis chave: O Gerente de Teste, que lidera e organiza tudo, e o Testador, que é o especialista técnico em encontrar os bugs!"
            },
            {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Qual atividade de teste envolve a criação de casos de teste e a preparação do ambiente de teste?",
                options: [
                  { text: "Planejamento de Teste", correct: false },
                  { text: "Análise e Modelagem de Teste", correct: true },
                  { text: "Execução de Teste", correct: false },
                  { text: "Conclusão de Teste", correct: false }
                ],
                feedbackCorrect: "Perfeito! Modelar (projetar) e implementar são passos cruciais! 🧑‍🎨",
                feedbackIncorrect: "Quase! Pense em quem 'desenha' os testes e prepara o cenário.",
                explanation: "A Análise e Modelagem (Design) de Teste envolvem a derivação de casos de teste a partir da base de teste e o planejamento de como esses testes serão executados, incluindo a preparação de dados e ambiente. A Implementação foca em organizar e finalizar o testware."
            }
        ] 
      },
      { 
        id: "1.5", 
        title: "1.5 Habilidades essenciais e boas práticas em testes", 
        icon: "💪", 
        locked: true, 
        completed: false, 
        slides: [
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Para ser um super Testador, precisamos de algumas habilidades! Curiosidade para explorar, atenção aos detalhes para não deixar nada escapar, pensamento crítico, e boa comunicação para explicar os achados!"
            },
             {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Qual das seguintes habilidades NÃO é considerada uma habilidade essencial genérica para um testador?",
                options: [
                  { text: "Curiosidade", correct: false },
                  { text: "Habilidade avançada de programação em 5 linguagens", correct: true },
                  { text: "Atenção aos detalhes", correct: false },
                  { text: "Boas habilidades de comunicação", correct: false }
                ],
                feedbackCorrect: "Correto! Embora conhecimento técnico seja útil, ser um poliglota da programação não é o essencial para *todos* os testadores.",
                feedbackIncorrect: "Pense nas qualidades que ajudam a investigar e comunicar problemas.",
                explanation: "Habilidades como curiosidade, atenção aos detalhes, pensamento crítico e boa comunicação são essenciais. Conhecimento técnico é valioso, mas a profundidade em múltiplas linguagens de programação não é uma exigência genérica para todos os papéis de teste."
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "Uma boa prática é a 'Abordagem de Equipe Completa' (Whole Team Approach). Nela, todos no time são responsáveis pela qualidade, não só os testadores. É um trabalho em equipe! 🤝"
            },
            {
                type: 'content',
                character: 'professorBugsy',
                text: "E a independência nos testes? Testadores independentes (de fora da equipe de desenvolvimento) podem ver coisas que os desenvolvedores não veem, por terem uma perspectiva diferente. Mas isso pode criar distância. O ideal é um equilíbrio!"
            },
            {
                type: 'quiz',
                character: 'professorBugsy',
                question: "Qual é um benefício da independência nos testes?",
                options: [
                  { text: "Os testadores conhecem melhor o código.", correct: false },
                  { text: "É mais rápido, pois não há comunicação externa.", correct: false },
                  { text: "Testadores independentes podem ter uma perspectiva diferente e encontrar defeitos que outros não veriam.", correct: true },
                  { text: "Garante que nenhum defeito passará.", correct: false }
                ],
                feedbackCorrect: "Exatamente! Um olhar 'de fora' pode ser muito valioso! 🧐",
                feedbackIncorrect: "Pense na vantagem de ter alguém que não participou da criação olhando o produto.",
                explanation: "Testadores independentes não estão sujeitos aos mesmos vieses cognitivos dos desenvolvedores, o que pode ajudá-los a identificar diferentes tipos de falhas e defeitos."
            }
        ] 
      },
    ]
  },
  {
    id: "ch2",
    title: "Capítulo 2: Testes ao longo do Ciclo de Vida",
    characterIcon: "🔄", 
    description: "Descubra como os testes se encaixam no desenvolvimento.",
    lessons: [
        {
            id: "2.1", 
            title: "2.1 Testes no contexto do Ciclo de Vida", 
            icon: "➡️", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O jeito que um software é feito (o Ciclo de Vida de Desenvolvimento de Software, ou SDLC) influencia muito como testamos! Seja um modelo Cascata (sequencial), Iterativo ou Ágil, os testes se adaptam."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Em um modelo de desenvolvimento Sequencial (ex: Cascata), quando as atividades de teste dinâmico são mais intensas?",
                    options: [
                        { text: "Desde o início, em paralelo com os requisitos.", correct: false },
                        { text: "Principalmente após a fase de codificação estar completa ou quase completa.", correct: true },
                        { text: "Apenas após o software ser entregue ao cliente.", correct: false },
                        { text: "Continuamente, em pequenas iterações.", correct: false }
                    ],
                    feedbackCorrect: "Correto! No modelo cascata, uma fase termina para a outra começar.",
                    feedbackIncorrect: "Pense na sequência: requisitos, design, código, DEPOIS teste.",
                    explanation: "Em modelos sequenciais como o Cascata, as atividades de teste dinâmico (execução do software) geralmente ocorrem após a conclusão da fase de desenvolvimento (codificação)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Boas práticas de teste valem para todos os SDLCs! Por exemplo, para cada atividade de desenvolvimento, deve haver uma atividade de teste correspondente. E começar a analisar e modelar testes cedo (shift-left!) é sempre uma boa!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Já ouviu falar em TDD (Desenvolvimento Orientado por Testes), ATDD (Desenvolvimento Orientado por Testes de Aceite) ou BDD (Desenvolvimento Orientado por Comportamento)? São abordagens onde os testes são criados *antes* do código, guiando o desenvolvimento! É como ter o mapa antes de começar a jornada. 🗺️"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual o princípio fundamental por trás de TDD, ATDD e BDD?",
                    options: [
                        { text: "Escrever testes apenas após o código estar estável.", correct: false },
                        { text: "Definir testes (ou especificações executáveis) antes de escrever o código da funcionalidade.", correct: true },
                        { text: "Focar apenas em testes manuais para maior clareza.", correct: false },
                        { text: "Permitir que apenas desenvolvedores escrevam testes.", correct: false }
                    ],
                    feedbackCorrect: "Exatamente! Os testes guiam o caminho do desenvolvimento!",
                    feedbackIncorrect: "Pense: o que vem primeiro nessas abordagens, o teste ou o código?",
                    explanation: "TDD, ATDD e BDD são abordagens que promovem a escrita de testes (ou especificações na forma de testes) antes da implementação do código da funcionalidade, servindo como guia e critério de conclusão para o desenvolvimento."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E o DevOps? É uma cultura de colaboração entre Desenvolvimento (Dev) e Operações (Ops), com muita automação (CI/CD - Integração/Entrega Contínua). Isso agiliza a entrega de software de qualidade, e os testes são parte essencial desse fluxo rápido!"
                },
                 {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Shift-left é a prática de mover as atividades de teste para o mais cedo possível no ciclo de vida. Quanto antes um defeito é encontrado, mais fácil e barato é corrigi-lo! 🕰️➡️💰"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "As retrospectivas são reuniões importantes ao final de um projeto ou iteração para discutir o que foi bom, o que pode melhorar e como aplicar essas melhorias. É aprender e evoluir sempre!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "O que significa a abordagem 'shift-left' em testes?",
                    options: [
                        { text: "Testar apenas no final do projeto.", correct: false },
                        { text: "Começar as atividades de teste o mais cedo possível no ciclo de vida.", correct: true },
                        { text: "Deixar os testes para a equipe de operações.", correct: false },
                        { text: "Usar apenas ferramentas de teste da esquerda para a direita.", correct: false }
                    ],
                    feedbackCorrect: "Corretíssimo! Antecipar os testes é uma grande economia! ⏳",
                    feedbackIncorrect: "Lembre-se do ditado: 'tempo é dinheiro', especialmente em software!",
                    explanation: "Shift-left é a prática de iniciar as atividades de teste mais cedo no ciclo de desenvolvimento, em vez de esperar até que o desenvolvimento esteja concluído. Isso ajuda a encontrar defeitos mais cedo, tornando-os mais baratos de corrigir."
                }
            ]
        },
        {
            id: "2.2", 
            title: "2.2 Níveis de Teste e Tipos de Teste", 
            icon: "📊", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Os testes acontecem em diferentes NÍVEIS! Como andares de um prédio, cada um com seu foco. Temos: Teste de Componente (pequenas partes), Teste de Integração de Componentes (como as partes conversam), Teste de Sistema (o sistema todo), Teste de Integração de Sistemas (o sistema conversando com outros) e Teste de Aceite (o cliente está feliz?)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual nível de teste é geralmente realizado por desenvolvedores em seu ambiente de desenvolvimento, focando em módulos ou unidades de código isoladas?",
                    options: [
                        { text: "Teste de Sistema", correct: false },
                        { text: "Teste de Componente (ou Teste de Unidade)", correct: true },
                        { text: "Teste de Aceite", correct: false },
                        { text: "Teste de Integração de Sistemas", correct: false }
                    ],
                    feedbackCorrect: "Isso mesmo! Testar os 'tijolinhos' do software!",
                    feedbackIncorrect: "Pense no menor nível, onde as peças individuais são verificadas.",
                    explanation: "O Teste de Componente (também conhecido como Teste de Unidade) foca em testar componentes de software isoladamente e é frequentemente realizado por desenvolvedores."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Teste de Componente é como testar cada peça de um Lego. Teste de Integração é ver se as peças de Lego se encaixam. Teste de Sistema é checar o castelo de Lego montado. E Teste de Aceite é ver se quem pediu o castelo gostou dele! 😉"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Além dos níveis, temos TIPOS de Teste! Teste Funcional: 'O que o software FAZ?'. Teste Não Funcional: 'Quão BEM ele faz?' (performance, usabilidade, segurança...). Teste Caixa-Branca: 'Olhamos o código por dentro!'. Teste Caixa-Preta: 'Só vemos por fora, como um usuário'."
                },
                 {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Testar a velocidade de resposta de um site sob carga é um exemplo de qual tipo de teste?",
                    options: [
                        { text: "Teste Funcional", correct: false },
                        { text: "Teste Não Funcional (Eficiência de Performance)", correct: true },
                        { text: "Teste Caixa-Branca", correct: false },
                        { text: "Teste de Componente", correct: false }
                    ],
                    feedbackCorrect: "Correto! Performance é um aspecto crucial de 'quão bem' o sistema funciona!",
                    feedbackIncorrect: "Pense se isso se refere ao 'o quê' o sistema faz ou 'como' ele faz.",
                    explanation: "Testar a velocidade de resposta sob carga é um exemplo de Teste Não Funcional, especificamente relacionado à característica de qualidade 'Eficiência de Performance'."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "A ISO 25010 nos dá uma lista de características de qualidade para o Teste Não Funcional, como Eficiência de Performance, Compatibilidade, Usabilidade, Confiabilidade, Segurança, Manutenibilidade e Portabilidade. Ufa! 😅"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E não podemos esquecer do Teste de Confirmação (re-teste: o bug foi corrigido?) e do Teste de Regressão (a correção ou nova funcionalidade quebrou algo que já funcionava?). São super importantes!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Após uma correção de defeito, qual tipo de teste é realizado para garantir que a correção funcionou e o defeito original foi resolvido?",
                    options: [
                        { text: "Teste de Regressão", correct: false },
                        { text: "Teste de Confirmação (Re-teste)", correct: true },
                        { text: "Teste de Performance", correct: false },
                        { text: "Teste de Usabilidade", correct: false }
                    ],
                    feedbackCorrect: "Exatamente! Confirmar se o 'conserto' deu certo!",
                    feedbackIncorrect: "Pense: o que você faz para *confirmar* que um problema foi resolvido?",
                    explanation: "O Teste de Confirmação (ou Re-teste) é realizado para verificar se um defeito que foi reportado e corrigido realmente foi resolvido."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual nível de teste foca em verificar se as unidades de software interagem corretamente entre si?",
                    options: [
                        { text: "Teste de Componente", correct: false },
                        { text: "Teste de Integração", correct: true },
                        { text: "Teste de Sistema", correct: false },
                        { text: "Teste de Aceite", correct: false }
                    ],
                    feedbackCorrect: "Isso mesmo! A integração é sobre a comunicação entre as partes! 🔗",
                    feedbackIncorrect: "Pense em como as peças se conectam, não nas peças sozinhas ou no todo.",
                    explanation: "O Teste de Integração foca em verificar as interfaces e interações entre componentes ou sistemas integrados."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Verificar se o software é fácil de usar e entender é um exemplo de qual tipo de teste?",
                    options: [
                        { text: "Teste Funcional", correct: false },
                        { text: "Teste Não Funcional (Usabilidade)", correct: true },
                        { text: "Teste Caixa-Branca", correct: false },
                        { text: "Teste de Regressão", correct: false }
                    ],
                    feedbackCorrect: "Correto! Usabilidade é chave para um software amigável! 😊",
                    feedbackIncorrect: "Lembre-se, funcional é 'o quê', não funcional é 'quão bem'.",
                    explanation: "A usabilidade é uma característica de qualidade não funcional que avalia a facilidade com que os usuários podem aprender, usar e se satisfazer com um software."
                }
            ]
        },
        {
            id: "2.3", 
            title: "2.3 Teste de Manutenção", 
            icon: "🔧", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Mesmo depois de lançado, o software continua precisando de cuidados! Isso é o Teste de Manutenção. Ele acontece quando corrigimos algo, adaptamos para um novo ambiente (ex: novo celular) ou melhoramos o sistema."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Os gatilhos para o teste de manutenção podem ser: modificações (correções ou melhorias), migrações (mudança de plataforma) ou até a aposentadoria do sistema (precisamos garantir que os dados sejam arquivados corretamente!)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Mudar um software para rodar em um novo sistema operacional exigiria qual tipo de teste de manutenção?",
                    options: [
                      { text: "Correção de defeitos urgentes (hotfix).", correct: false },
                      { text: "Adaptação devido a migração de ambiente.", correct: true },
                      { text: "Melhoria de performance planejada.", correct: false },
                      { text: "Aposentadoria do sistema.", correct: false }
                    ],
                    feedbackCorrect: "Exatamente! O software precisa se adaptar ao novo 'lar'!",
                    feedbackIncorrect: "Pense na razão da mudança: foi um bug, uma melhoria ou uma necessidade de adaptação?",
                    explanation: "A migração de um software para um novo ambiente operacional (como um novo sistema operacional) é um gatilho para testes de manutenção focados na adaptação e verificação da compatibilidade e funcionalidade no novo ambiente."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O tamanho do teste de manutenção depende do risco da mudança, do tamanho do sistema e do tamanho da própria mudança. Uma pequena correção pode precisar de menos teste que uma grande atualização! Uma boa Análise de Impacto nos ajuda a decidir o que testar."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual dos seguintes NÃO é um gatilho típico para Teste de Manutenção?",
                    options: [
                        { text: "Correção de um defeito encontrado em produção.", correct: false },
                        { text: "Desenvolvimento inicial de uma nova funcionalidade.", correct: true },
                        { text: "Migração do software para um novo sistema operacional.", correct: false },
                        { text: "Melhoria planejada na performance do sistema.", correct: false }
                    ],
                    feedbackCorrect: "Exato! O desenvolvimento inicial é sobre criar, não manter! 😉",
                    feedbackIncorrect: "Pense no que acontece *depois* que o software já está 'vivo'.",
                    explanation: "O Teste de Manutenção ocorre em um sistema já existente. O desenvolvimento inicial de uma nova funcionalidade faz parte do desenvolvimento do produto, não da manutenção."
                }
            ]
        },
    ]
  },
  {
    id: "ch3",
    title: "Capítulo 3: Teste Estático",
    characterIcon: "📄", 
    description: "Explore testes sem executar o código.",
    lessons: [
        {
            id: "3.1", 
            title: "3.1 Noções básicas de Teste Estático", 
            icon: "🧐", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Teste Estático é como revisar um livro antes de publicar! 📖 Não executamos o código, mas examinamos documentos, modelos ou o próprio código para encontrar problemas. É uma forma poderosa de achar defeitos cedo!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Podemos examinar requisitos, histórias de usuários, especificações de arquitetura, código-fonte, planos de teste... quase qualquer produto de trabalho! O objetivo é melhorar a qualidade e achar defeitos."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual dos seguintes artefatos NÃO seria tipicamente examinado durante o teste estático?",
                    options: [
                      { text: "Especificação de Requisitos", correct: false },
                      { text: "Código-fonte", correct: false },
                      { text: "O software em execução no ambiente de produção", correct: true },
                      { text: "Planos de teste", correct: false }
                    ],
                    feedbackCorrect: "Correto! Teste estático é sobre examinar 'papel' ou código, não o software rodando.",
                    feedbackIncorrect: "Lembre-se, 'estático' significa que não há execução.",
                    explanation: "O teste estático envolve a análise de produtos de trabalho sem executá-los. O software em execução no ambiente de produção seria avaliado por testes dinâmicos ou monitoramento."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O valor do teste estático é imenso! Ele pode encontrar defeitos que o teste dinâmico (executando o código) não pegaria, como código inalcançável ou desvios de padrões de codificação. E, claro, quanto antes achamos, mais barato é corrigir!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Ferramentas de análise estática podem nos ajudar a verificar automaticamente regras de codificação, complexidade do código e até potenciais vulnerabilidades de segurança, sem rodar nada! 🤖"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual das seguintes é uma característica do Teste Estático?",
                    options: [
                        { text: "Requer a execução do software em um ambiente de teste.", correct: false },
                        { text: "Envolve a avaliação de produtos de trabalho sem executar o código.", correct: true },
                        { text: "É usado principalmente para medir a performance do sistema.", correct: false },
                        { text: "Só pode ser feito por desenvolvedores.", correct: false }
                    ],
                    feedbackCorrect: "Corretíssimo! É a arte de encontrar problemas só olhando! 🕵️‍♀️",
                    feedbackIncorrect: "Lembre-se, 'estático' significa que o software não está 'em movimento'.",
                    explanation: "O Teste Estático examina produtos de trabalho (documentos, código) sem a necessidade de executar o software. Seu foco é encontrar defeitos e melhorar a qualidade preventivamente."
                }
            ]
        },
        {
            id: "3.2", 
            title: "3.2 Processo de feedback e revisão", 
            icon: "🗣️", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Dar e receber feedback cedo e com frequência é vital! Isso ajuda a alinhar as expectativas e a garantir que todos entendam os requisitos da mesma forma. Uma revisão bem feita é uma forma de feedback estruturado."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Um processo de revisão formal (como o da ISO/IEC 20246) tem atividades chave: Planejamento (definir o quê e como revisar), Início (preparar todos), Revisão Individual (cada um analisa), Comunicação e Análise de Problemas (discutir achados) e Correção e Relatório (resolver e documentar)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Na atividade 'Revisão Individual' de um processo de revisão, o que os revisores fazem?",
                    options: [
                      { text: "Corrigem os defeitos encontrados no documento.", correct: false },
                      { text: "Discutem em grupo os problemas identificados.", correct: false },
                      { text: "Analisam o produto de trabalho para identificar anomalias e fazer recomendações.", correct: true },
                      { text: "Decidem se o produto de trabalho atende aos critérios de saída.", correct: false }
                    ],
                    feedbackCorrect: "Exato! É o momento de cada um fazer sua 'lição de casa' investigativa.",
                    feedbackIncorrect: "Pense no que cada revisor faz sozinho antes da reunião.",
                    explanation: "Durante a Revisão Individual, cada revisor examina o produto de trabalho de forma independente para identificar possíveis anomalias, fazer perguntas e sugerir melhorias, registrando seus achados."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Em uma revisão, temos papéis importantes: Gerente (decide o que revisar), Autor (criador do item), Moderador (lidera a reunião), Revisor (analisa e encontra problemas), Relator (anota tudo) e Líder da Revisão (responsável geral)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Existem diferentes tipos de revisão, da mais informal à mais formal: Revisão Informal (um bate-papo), Walkthrough (apresentação pelo autor), Revisão Técnica (discussão técnica) e Inspeção (a mais rigorosa, com métricas e tudo!)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Para uma revisão ser um sucesso: objetivos claros, tipo certo de revisão, revisar em partes pequenas, feedback construtivo, tempo para preparação, apoio da gerência e uma cultura de aprendizado!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual tipo de revisão é considerado o mais formal e rigoroso, seguindo um processo definido e coletando métricas?",
                    options: [
                        { text: "Revisão Informal", correct: false },
                        { text: "Walkthrough", correct: false },
                        { text: "Revisão Técnica", correct: false },
                        { text: "Inspeção", correct: true }
                    ],
                    feedbackCorrect: "Excelente! A Inspeção é o 'detetive' das revisões! 🕵️‍♂️",
                    feedbackIncorrect: "Pense no tipo de revisão que seria usado para algo muito crítico e que precisa de muita formalidade.",
                    explanation: "A Inspeção é o tipo mais formal de revisão, seguindo um processo definido, com papéis específicos, e focada na detecção máxima de anomalias, geralmente com coleta de métricas para aprimoramento do processo."
                }
            ]
        },
    ]
  },
  {
    id: "ch4",
    title: "Capítulo 4: Análise e Modelagem de Teste",
    characterIcon: "🧩", 
    description: "Domine as técnicas para criar testes eficazes.",
    lessons: [
        {
            id: "4.1", 
            title: "4.1 Visão geral das técnicas de teste", 
            icon: "🗺️", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "As técnicas de teste são nossas ferramentas secretas para criar casos de teste eficazes! 🛠️ Elas nos ajudam a decidir O QUE testar e COMO testar de forma sistemática."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Temos três grandes famílias de técnicas: Caixa-Preta (foco no comportamento externo, sem ver o código), Caixa-Branca (foco na estrutura interna, olhando o código) e Baseadas na Experiência (usando nosso conhecimento e intuição)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Uma técnica de teste que se baseia em requisitos e especificações, sem olhar o código interno, pertence a qual categoria?",
                    options: [
                        { text: "Caixa-Branca", correct: false },
                        { text: "Caixa-Preta", correct: true },
                        { text: "Baseada na Experiência", correct: false }
                    ],
                    feedbackCorrect: "Correto! A caixa-preta vê o software como um usuário! ⬛",
                    feedbackIncorrect: "Pense em uma caixa que você não pode ver por dentro...",
                    explanation: "Técnicas de teste caixa-preta (ou baseadas em especificação) derivam testes do comportamento externo do sistema, como definido em requisitos, sem conhecimento da estrutura interna."
                }
            ]
        },
        {
            id: "4.2", 
            title: "4.2 Técnicas de Teste Caixa-Preta", 
            icon: "⬛", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Vamos mergulhar nas técnicas Caixa-Preta! A primeira é o Particionamento de Equivalência (EP). Dividimos as entradas em grupos (partições) onde esperamos que o sistema se comporte da mesma forma. Testamos um valor de cada partição!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "No Particionamento de Equivalência, se uma partição representa 'idades válidas de 18 a 65', qual seria um exemplo de valor de teste para esta partição?",
                    options: [
                      { text: "17", correct: false },
                      { text: "30", correct: true },
                      { text: "66", correct: false },
                      { text: "Qualquer idade", correct: false }
                    ],
                    feedbackCorrect: "Exato! 30 está dentro da partição válida.",
                    feedbackIncorrect: "Escolha um valor que se encaixe no grupo de idades válidas (18-65).",
                    explanation: "O Particionamento de Equivalência (EP) divide os dados em partições. Para a partição 'idades válidas de 18 a 65', qualquer valor dentro desse intervalo (ex: 30) pode ser usado para representar a partição."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Depois temos a Análise de Valor Limite (BVA). Os erros adoram se esconder nas fronteiras das partições! 🐛 Com BVA, testamos os valores nos limites e logo ao lado deles. Pode ser com 2 valores (o limite e o vizinho) ou 3 valores (o limite e os dois vizinhos)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Se um campo aceita números de 1 a 100, quais valores seriam tipicamente testados usando BVA de 3 valores para o limite inferior (1)?",
                    options: [
                        { text: "0, 1, 2", correct: true },
                        { text: "1, 2, 3", correct: false },
                        { text: "1, 50, 100", correct: false },
                        { text: "Apenas 1", correct: false }
                    ],
                    feedbackCorrect: "Perfeito! Os vizinhos do limite são importantíssimos! 👌",
                    feedbackIncorrect: "Lembre-se, BVA de 3 valores pega o limite e seus dois vizinhos imediatos.",
                    explanation: "Para BVA de 3 valores, em um limite inferior como '1' (onde '0' seria inválido e '2' válido), testamos o valor antes do limite (0), o próprio limite (1), e o valor após o limite (2)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Para regras de negócio complexas, usamos o Teste de Tabela de Decisão! Listamos as condições e as ações, e criamos colunas (regras) para cada combinação. Super útil para desembaraçar lógicas complicadas!"
                },
                 {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Quando o Teste de Tabela de Decisão é particularmente útil?",
                    options: [
                      { text: "Para testar interfaces de usuário simples.", correct: false },
                      { text: "Quando há muitas combinações de condições que resultam em diferentes ações.", correct: true },
                      { text: "Para medir a performance do sistema.", correct: false },
                      { text: "Para verificar a estrutura interna do código.", correct: false }
                    ],
                    feedbackCorrect: "Correto! Tabelas de decisão ajudam a organizar o caos lógico!",
                    feedbackIncorrect: "Pense em situações com muitas 'se' e 'então'.",
                    explanation: "O Teste de Tabela de Decisão é muito eficaz para testar sistemas com lógica de negócio complexa, onde múltiplas condições combinadas determinam as ações a serem tomadas."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E o Teste de Transição de Estado? Ele modela como o sistema muda de um estado para outro (ex: pedido 'Pendente' -> 'Aprovado' -> 'Enviado'). Testamos as transições válidas e, às vezes, as inválidas."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual técnica caixa-preta é mais adequada para testar o comportamento de um sistema que passa por diferentes fases ou modos?",
                    options: [
                      { text: "Particionamento de Equivalência", correct: false },
                      { text: "Análise de Valor Limite", correct: false },
                      { text: "Teste de Tabela de Decisão", correct: false },
                      { text: "Teste de Transição de Estado", correct: true }
                    ],
                    feedbackCorrect: "Isso mesmo! Estados e transições são o foco dela! 🚂",
                    feedbackIncorrect: "Pense em algo que muda de 'humor' ou 'status'.",
                    explanation: "O Teste de Transição de Estado é ideal para sistemas cujo comportamento depende de seu estado atual e dos eventos que causam transições para outros estados."
                  }
            ]
        },
        {
            id: "4.3", 
            title: "4.3 Técnicas de Teste Caixa-Branca", 
            icon: "⬜", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Agora, vamos espiar dentro da caixa com as técnicas Caixa-Branca! Aqui olhamos a estrutura interna do código. O Teste de Instrução busca executar cada linha de código executável pelo menos uma vez."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "A Cobertura de Instrução mede quantas linhas foram executadas. 100% de cobertura de instrução é bom, mas não garante que todos os caminhos de decisão foram testados!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "O que a Cobertura de Instrução mede?",
                    options: [
                      { text: "Quantas funcionalidades foram testadas.", correct: false },
                      { text: "A porcentagem de instruções executáveis do código que foram exercitadas pelos testes.", correct: true },
                      { text: "Quantos defeitos foram encontrados por linha de código.", correct: false },
                      { text: "A performance do código durante a execução.", correct: false }
                    ],
                    feedbackCorrect: "Exato! Medimos quantas 'frases' do código foram lidas!",
                    feedbackIncorrect: "Lembre-se, é sobre as *instruções* do código.",
                    explanation: "A Cobertura de Instrução mede a proporção de instruções executáveis no código que foram exercitadas por um conjunto de testes, expressa como uma porcentagem."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Para isso, temos o Teste de Ramificação (ou Desvio)! Ele foca em executar cada possível resultado de uma decisão no código (o 'sim' e o 'não' de um 'if', por exemplo). 100% de cobertura de ramificação é mais forte e inclui 100% de instrução!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O valor do teste caixa-branca é encontrar defeitos na lógica interna que testes caixa-preta poderiam não achar, como um cálculo errado escondido em uma condição específica."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Se um teste atinge 100% de Cobertura de Ramificação, ele também garante 100% de Cobertura de Instrução?",
                    options: [
                        { text: "Sim, sempre.", correct: true },
                        { text: "Não, nunca.", correct: false },
                        { text: "Apenas se não houver 'loops' no código.", correct: false },
                        { text: "Apenas se não houver instruções 'else'.", correct: false }
                    ],
                    feedbackCorrect: "Corretíssimo! Cobrir todas as ramificações significa passar por todas as instruções! 🛤️",
                    feedbackIncorrect: "Pense bem: para testar um 'if' e um 'else', você precisa executar as instruções dentro de ambos.",
                    explanation: "100% de cobertura de ramificação implica que todas as possíveis saídas de todas as decisões foram tomadas, o que, por sua vez, significa que todas as instruções executáveis nessas ramificações foram executadas. Portanto, 100% de cobertura de ramificação inclui 100% de cobertura de instrução."
                }
            ]
        },
        {
            id: "4.4", 
            title: "4.4 Técnicas de Teste Baseadas na Experiência", 
            icon: "🧠", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "As técnicas baseadas na experiência usam o conhecimento, intuição e 'faro' do testador! 🕵️ A Suposição de Erro é quando prevemos onde os erros podem estar, com base em experiências passadas ou tipos comuns de bugs."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "A técnica 'Suposição de Erro' baseia-se principalmente em quê?",
                    options: [
                      { text: "Especificações formais detalhadas.", correct: false },
                      { text: "Conhecimento e experiência do testador sobre tipos comuns de defeitos.", correct: true },
                      { text: "Cobertura estrutural do código.", correct: false },
                      { text: "Modelos de transição de estado.", correct: false }
                    ],
                    feedbackCorrect: "Correto! É a intuição afiada do testador em ação!",
                    feedbackIncorrect: "Pense: o que guia essa 'suposição'?",
                    explanation: "A Suposição de Erro (Error Guessing) é uma técnica de teste baseada na experiência onde o testador usa seu conhecimento, intuição e experiência sobre onde os defeitos tendem a ocorrer para projetar casos de teste."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O Teste Exploratório é uma aventura! Aprendemos sobre o software, modelamos testes e os executamos, tudo ao mesmo tempo. É ótimo quando as especificações são poucas ou o tempo é curto. Muitas vezes usamos 'testes baseados em sessão' para organizar."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E os Testes baseados em Lista de Verificação (Checklist)? Criamos uma lista de itens a serem verificados. Ajuda a garantir consistência e a não esquecer de nada importante. As listas devem ser atualizadas com o tempo!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual técnica é caracterizada pelo aprendizado, modelagem e execução de testes de forma simultânea e dinâmica?",
                    options: [
                        { text: "Suposição de Erro", correct: false },
                        { text: "Testes Exploratórios", correct: true },
                        { text: "Testes baseados em Lista de Verificação", correct: false },
                        { text: "Teste de Tabela de Decisão", correct: false }
                    ],
                    feedbackCorrect: "Isso aí! Explorar é descobrir na hora! 🧭",
                    feedbackIncorrect: "Pense em qual técnica se parece mais com uma 'exploração' livre.",
                    explanation: "O Teste Exploratório envolve o testador aprendendo sobre o sistema, projetando e executando testes e interpretando os resultados simultaneamente. É uma abordagem muito dinâmica e adaptativa."
                }
            ]
        },
        {
            id: "4.5", 
            title: "4.5 Abordagens de Teste Baseadas na Colaboração", 
            icon: "🤝", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "A colaboração é superpoderosa nos testes! A escrita colaborativa de Histórias de Usuários usa os 3Cs: Cartão (onde a história é escrita), Conversação (discussão sobre ela) e Confirmação (Critérios de Aceite)."
                },
                 {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Nos '3Cs' da escrita colaborativa de Histórias de Usuários, o que representa a 'Conversação'?",
                    options: [
                      { text: "Onde a história é fisicamente escrita (ex: um post-it).", correct: false },
                      { text: "As discussões e esclarecimentos sobre a história entre a equipe e stakeholders.", correct: true },
                      { text: "Os testes automatizados para a história.", correct: false },
                      { text: "A aprovação final da história pelo cliente.", correct: false }
                    ],
                    feedbackCorrect: "Exato! A conversa é onde o entendimento compartilhado é construído!",
                    feedbackIncorrect: "Pense no diálogo e na troca de ideias sobre a história.",
                    explanation: "Na abordagem dos 3Cs para Histórias de Usuários, 'Conversação' refere-se ao diálogo contínuo entre a equipe de desenvolvimento e os stakeholders para refinar o entendimento da história e seus detalhes."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Critérios de Aceite são as condições que a história deve atender para ser considerada 'pronta'. Podem ser escritos como cenários (Dado/Quando/Então - Gherkin) ou listas de regras. Eles são a base para os testes de aceite!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O Desenvolvimento Orientado por Teste de Aceite (ATDD) é uma abordagem onde o time (clientes, desenvolvedores, testadores) cria os testes de aceite *antes* da implementação. Isso garante que todos entendam o que precisa ser feito!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "No ATDD, quando os casos de teste de aceite são tipicamente criados?",
                    options: [
                        { text: "Depois que a codificação da história de usuário está completa.", correct: false },
                        { text: "Durante a execução dos testes de sistema.", correct: false },
                        { text: "Antes da implementação da história de usuário, em colaboração.", correct: true },
                        { text: "Apenas pelo cliente, no final do projeto.", correct: false }
                    ],
                    feedbackCorrect: "Correto! No ATDD, os testes vêm primeiro para guiar! 📜",
                    feedbackIncorrect: "Lembre-se que o 'A' em ATDD é de 'Acceptance Test' (Teste de Aceite) e o 'D' é de 'Driven' (Orientado).",
                    explanation: "No Desenvolvimento Orientado por Teste de Aceite (ATDD), os testes de aceite são criados colaborativamente pela equipe (incluindo representantes do negócio, desenvolvedores e testadores) *antes* que a funcionalidade correspondente seja implementada. Esses testes ajudam a definir e esclarecer o comportamento esperado."
                }
            ]
        },
    ]
  },
  {
    id: "ch5",
    title: "Capítulo 5: Gerenciamento das Atividades de Teste",
    characterIcon: "📋", 
    description: "Organize e controle o processo de teste.",
    lessons: [
        {
            id: "5.1", 
            title: "5.1 Planejamento de Teste", 
            icon: "📝", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Planejar os testes é como traçar a rota de uma grande aventura! 🗺️ Um Plano de Teste descreve os objetivos, recursos, cronograma e processos que usaremos."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O que tem num Plano de Teste? Contexto, escopo, abordagem de teste, critérios de entrada e saída, riscos, cronograma, responsabilidades... ufa, bastante coisa!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual dos seguintes itens NÃO é tipicamente incluído em um Plano de Teste?",
                    options: [
                        { text: "Escopo dos testes", correct: false },
                        { text: "Resultados detalhados de cada caso de teste executado", correct: true },
                        { text: "Cronograma das atividades de teste", correct: false },
                        { text: "Recursos necessários para o teste", correct: false }
                    ],
                    feedbackCorrect: "Isso mesmo! Os resultados vêm depois, nos relatórios de execução! 📄",
                    feedbackIncorrect: "Pense no plano como o 'antes' da execução.",
                    explanation: "Um Plano de Teste foca no planejamento e estratégia (escopo, cronograma, recursos, abordagem, etc.). Os resultados detalhados da execução dos casos de teste são documentados em relatórios de progresso ou conclusão de teste."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Critérios de Entrada definem quando podemos começar uma atividade (ex: ambiente pronto). Critérios de Saída definem quando ela está concluída (ex: 95% de cobertura). Em métodos ágeis, usamos Definição de Pronto (DoR) e Definição de Feito (DoD)."
                },
                 {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Em contextos ágeis, 'Definição de Feito' (DoD) se refere a quê?",
                    options: [
                      { text: "Os critérios que uma história de usuário deve atender para ser iniciada.", correct: false },
                      { text: "Os critérios que uma história de usuário ou incremento deve atender para ser considerado completo e potencialmente entregável.", correct: true },
                      { text: "O plano de teste para a sprint.", correct: false },
                      { text: "A lista de defeitos encontrados na iteração.", correct: false }
                    ],
                    feedbackCorrect: "Exato! DoD é o checklist para dizer 'Terminamos de verdade!'",
                    feedbackIncorrect: "Pense: o que significa 'Feito' para a equipe?",
                    explanation: "A Definição de Feito (Definition of Done - DoD) é um conjunto de critérios acordados pela equipe que uma história de usuário ou um incremento de produto deve atender para ser considerado completo e pronto para ser entregue ou liberado."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Estimar o esforço de teste é um desafio! Podemos usar técnicas baseadas em métricas (dados de projetos passados), ou baseadas em especialistas (como Wideband Delphi ou Planning Poker)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E como priorizar os casos de teste? Podemos focar nos riscos mais altos, na cobertura mais importante ou nos requisitos mais críticos para o negócio."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "A Pirâmide de Teste nos ajuda a visualizar a proporção de diferentes tipos de testes automatizados (muitos testes de unidade, menos de serviço, e ainda menos de UI). Já os Quadrantes de Teste nos ajudam a pensar sobre quais tipos de teste fazer, considerando se são orientados ao negócio ou à tecnologia, e se apoiam a equipe ou criticam o produto."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual técnica de estimativa de esforço envolve a coleta de estimativas de vários especialistas de forma iterativa até que um consenso seja alcançado?",
                    options: [
                        { text: "Estimativa baseada em índices (métricas)", correct: false },
                        { text: "Wideband Delphi (ou Planning Poker)", correct: true },
                        { text: "Extrapolação", correct: false },
                        { text: "Análise de Risco", correct: false }
                    ],
                    feedbackCorrect: "Correto! A sabedoria do grupo em ação!",
                    feedbackIncorrect: "Pense em uma técnica que busca o consenso de especialistas.",
                    explanation: "Wideband Delphi é uma técnica de estimativa baseada em consenso de especialistas, onde as estimativas são coletadas anonimamente, discutidas e refinadas iterativamente até que o grupo chegue a um acordo. Planning Poker é uma variação popular em contextos ágeis."
                }
            ]
        },
        {
            id: "5.2", 
            title: "5.2 Gerenciamento de Risco", 
            icon: "🎲", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Risco é uma possível ameaça que pode causar um efeito adverso. 😬 Ele tem dois amigos: a Probabilidade (chance de acontecer) e o Impacto (o estrago que faz se acontecer)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Temos Riscos de Projeto (atrasos, falta de pessoal, problemas com ferramentas) e Riscos de Produto (falhas no software, performance ruim, segurança fraca)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "A possibilidade de um testador chave ficar doente durante uma fase crítica do projeto é um exemplo de qual tipo de risco?",
                    options: [
                      { text: "Risco de Produto (falha funcional)", correct: false },
                      { text: "Risco de Projeto (problema de pessoal)", correct: true },
                      { text: "Risco Técnico (ferramenta inadequada)", correct: false },
                      { text: "Risco de Fornecedor (atraso na entrega de componente)", correct: false }
                    ],
                    feedbackCorrect: "Exato! Isso afeta o andamento do projeto.",
                    feedbackIncorrect: "Pense se o problema afeta o 'como fazer' o projeto ou o 'o quê' o projeto entrega.",
                    explanation: "A indisponibilidade de pessoal chave (como um testador experiente) durante uma fase crítica é um Risco de Projeto, pois pode impactar o cronograma, o orçamento e a capacidade de atingir os objetivos do projeto."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "A Análise de Risco do Produto nos ajuda a identificar e avaliar esses riscos, para focarmos os testes onde mais importa! Isso se chama Teste Baseado em Risco. 🛡️"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E o Controle de Risco? É tomar medidas para diminuir o risco (mitigação, como testar mais), monitorá-lo, ou até decidir aceitá-lo, transferi-lo ou ter um plano B (contingência)."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Um software de e-commerce que não processa pagamentos corretamente representa principalmente um:",
                    options: [
                        { text: "Risco de Projeto (atraso na entrega)", correct: false },
                        { text: "Risco de Produto (funcionalidade incorreta)", correct: true },
                        { text: "Risco de Ferramenta (licença expirada)", correct: false },
                        { text: "Risco de Pessoal (testador doente)", correct: false }
                    ],
                    feedbackCorrect: "Exato! Isso afeta diretamente a qualidade e utilidade do produto! 🛒",
                    feedbackIncorrect: "Pense se o problema é com o 'fazer' o projeto ou com o 'resultado' do projeto.",
                    explanation: "Um problema na funcionalidade principal do software, como o processamento de pagamentos, é um Risco de Produto, pois afeta diretamente a qualidade e a capacidade do software de atender aos objetivos de negócio."
                }
            ]
        },
        {
            id: "5.3", 
            title: "5.3 Monitoramento, Controle e Conclusão do Teste", 
            icon: "📈", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Monitorar é ficar de olho no progresso dos testes! Usamos métricas para isso: progresso do projeto (tarefas concluídas), progresso do teste (casos executados), qualidade do produto (defeitos encontrados), riscos, cobertura e custos."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "O número de casos de teste executados em comparação com o total planejado é uma métrica de:",
                    options: [
                      { text: "Qualidade do Produto", correct: false },
                      { text: "Progresso do Teste", correct: true },
                      { text: "Custo do Teste", correct: false },
                      { text: "Risco Residual", correct: false }
                    ],
                    feedbackCorrect: "Correto! Ajuda a ver se estamos no caminho certo com a execução.",
                    feedbackIncorrect: "Pense: essa métrica mostra o 'quanto já fizemos' dos testes?",
                    explanation: "O número de casos de teste executados em relação ao total planejado é uma métrica de Progresso do Teste, indicando o avanço das atividades de execução."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O Controle de Teste usa essas informações para tomar decisões: repriorizar testes, ajustar cronogramas, adicionar recursos, etc. É manter o trem nos trilhos! 🚂"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E a Conclusão do Teste? É quando arquivamos tudo, aprendemos as lições e preparamos um Relatório de Conclusão do Teste, resumindo tudo que aconteceu."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Os Relatórios de Teste podem ser de Progresso (durante os testes) ou de Conclusão. Eles comunicam o status para diferentes públicos (gerentes, clientes, equipe), então o formato e a frequência variam."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual das seguintes métricas é usada para avaliar a qualidade do produto diretamente?",
                    options: [
                        { text: "Número de casos de teste planejados.", correct: false },
                        { text: "Horas gastas em reuniões de planejamento.", correct: false },
                        { text: "Densidade de defeitos encontrados por funcionalidade.", correct: true },
                        { text: "Custo da ferramenta de automação.", correct: false }
                    ],
                    feedbackCorrect: "Corretíssimo! A quantidade de defeitos nos diz muito sobre a saúde do software! ❤️‍🩹",
                    feedbackIncorrect: "Pense em qual métrica reflete diretamente os problemas no software.",
                    explanation: "A densidade de defeitos (número de defeitos por tamanho ou complexidade de uma funcionalidade) é uma métrica que ajuda a avaliar a qualidade do produto, indicando áreas mais problemáticas."
                }
            ]
        },
        {
            id: "5.4", 
            title: "5.4 Gerenciamento de Configuração (CM)", 
            icon: "⚙️", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "O Gerenciamento de Configuração (CM) é nosso organizador mestre! 📚 Ele ajuda a identificar, controlar e rastrear todos os itens de teste (planos, casos, scripts, software em teste, ambiente...). Tudo tem sua versão e seu lugar!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Com CM, criamos 'baselines' (versões estáveis e aprovadas). Se algo precisa mudar, seguimos um processo formal. Isso garante que saibamos exatamente o que está sendo testado e que possamos reproduzir os testes se necessário."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "O que é uma 'baseline' no contexto do Gerenciamento de Configuração?",
                    options: [
                      { text: "O primeiro caso de teste a ser executado.", correct: false },
                      { text: "Uma versão formalmente aprovada de um item de configuração, que serve como ponto de referência.", correct: true },
                      { text: "O relatório final de defeitos do projeto.", correct: false },
                      { text: "A equipe responsável por configurar o ambiente de teste.", correct: false }
                    ],
                    feedbackCorrect: "Exato! É um ponto de partida confiável e controlado.",
                    feedbackIncorrect: "Pense em uma 'foto' oficial de algo que não pode ser mudada sem controle.",
                    explanation: "Uma baseline, em Gerenciamento de Configuração, é uma especificação ou produto que foi formalmente revisado e acordado, que serve como base para desenvolvimento ou controle futuro, e que só pode ser alterado por meio de procedimentos formais de controle de mudança."
                  },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Em ambientes de CI/CD (Integração/Entrega Contínua), o CM automatizado é crucial para manter tudo consistente e rastreável no pipeline de DevOps."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Um dos principais benefícios do Gerenciamento de Configuração para os testes é:",
                    options: [
                        { text: "Garantir que todos os defeitos sejam corrigidos rapidamente.", correct: false },
                        { text: "Manter a rastreabilidade e o controle de versões dos itens de teste e do objeto de teste.", correct: true },
                        { text: "Automatizar a execução de todos os casos de teste.", correct: false },
                        { text: "Reduzir o número de casos de teste necessários.", correct: false }
                    ],
                    feedbackCorrect: "Exato! Organização e controle são as palavras-chave do CM! 📁",
                    feedbackIncorrect: "Pense em como o CM ajuda a saber 'o quê' e 'qual versão' estamos testando.",
                    explanation: "O Gerenciamento de Configuração (CM) é fundamental para garantir que todos os artefatos de teste e o próprio software sob teste sejam versionados, controlados e rastreáveis, permitindo a reprodutibilidade dos testes e a compreensão das mudanças."
                }
            ]
        },
        {
            id: "5.5", 
            title: "5.5 Gerenciamento de Defeitos", 
            icon: "🐞", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Encontrar defeitos é um dos nossos superpoderes! 🦸 Mas precisamos gerenciá-los. Um processo de Gerenciamento de Defeitos nos ajuda a registrar, analisar, classificar, corrigir e fechar os 'bugs'."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Um bom Relatório de Defeitos precisa de informações claras para que o defeito seja entendido e corrigido. Quais informações? Vamos ver!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Deve ter: ID único, Título, Data, Autor, Objeto de teste, Ambiente, Contexto (passos para reproduzir!), Resultados esperados vs. reais, Severidade (impacto do defeito), Prioridade (urgência da correção) e Status (aberto, corrigido, fechado...). "
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual a diferença entre Severidade e Prioridade de um defeito?",
                    options: [
                      { text: "Não há diferença, são sinônimos.", correct: false },
                      { text: "Severidade é o impacto no negócio, Prioridade é o impacto técnico.", correct: false },
                      { text: "Severidade é o impacto do defeito no sistema, Prioridade é a urgência com que deve ser corrigido.", correct: true },
                      { text: "Severidade é definida pelo testador, Prioridade pelo desenvolvedor.", correct: false }
                    ],
                    feedbackCorrect: "Corretíssimo! Um defeito grave pode ter baixa prioridade, e vice-versa.",
                    feedbackIncorrect: "Pense: um é sobre o 'estrago', o outro sobre a 'pressa'.",
                    explanation: "Severidade refere-se ao grau de impacto que um defeito tem no desenvolvimento ou operação do sistema. Prioridade indica a urgência com que o defeito deve ser corrigido, geralmente definida com base no impacto no negócio."
                  },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Ao relatar um defeito, qual informação é CRUCIAL para que os desenvolvedores possam investigar e corrigir o problema?",
                    options: [
                        { text: "A opinião do testador sobre a cor da interface.", correct: false },
                        { text: "Os passos detalhados para reproduzir a falha.", correct: true },
                        { text: "Quantos casos de teste já foram executados.", correct: false },
                        { text: "O nome da ferramenta de automação usada.", correct: false }
                    ],
                    feedbackCorrect: "Perfeito! Sem os passos, é como procurar uma agulha no palheiro! 😉",
                    feedbackIncorrect: "Pense no que o desenvolvedor MAIS precisa para entender o problema.",
                    explanation: "Os passos detalhados para reproduzir a falha são essenciais em um relatório de defeitos, pois permitem que os desenvolvedores observem o problema em seus próprios ambientes e entendam as condições que levaram à falha."
                }
            ]
        },
    ]
  },
  {
    id: "ch6",
    title: "Capítulo 6: Ferramentas de Teste",
    characterIcon: "🛠️", 
    description: "Conheça as ferramentas que auxiliam nos testes.",
    lessons: [
        {
            id: "6.1", 
            title: "6.1 Suporte de Ferramentas para Testes", 
            icon: "🧰", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "As ferramentas de teste são nossas assistentes mágicas! 🪄 Elas nos ajudam em muitas atividades, tornando nosso trabalho mais eficiente. Existem ferramentas para quase tudo!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Temos ferramentas de Gerenciamento (de requisitos, testes, defeitos, configuração), de Teste Estático (análise de código), de Projeto e Implementação de Testes (gerar casos de teste), de Execução e Cobertura, de Teste Não Funcional (performance, segurança), para DevOps (CI/CD) e de Colaboração!"
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Uma ferramenta que ajuda a verificar automaticamente se o código segue padrões de codificação é um exemplo de ferramenta de:",
                    options: [
                        { text: "Gerenciamento de Teste", correct: false },
                        { text: "Teste Estático", correct: true },
                        { text: "Execução de Teste", correct: false },
                        { text: "Teste Não Funcional", correct: false }
                    ],
                    feedbackCorrect: "Isso mesmo! Análise estática é poderosa para qualidade de código! ✨",
                    feedbackIncorrect: "Lembre-se, teste estático não executa o código, apenas o analisa.",
                    explanation: "Ferramentas de análise estática examinam o código (ou outros artefatos) sem executá-lo, para encontrar defeitos, inconsistências, ou desvios de padrões de codificação."
                },
                 {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Ferramentas que auxiliam na execução de testes de carga e estresse pertencem a qual categoria principal?",
                    options: [
                      { text: "Ferramentas de Teste Estático", correct: false },
                      { text: "Ferramentas de Gerenciamento de Configuração", correct: false },
                      { text: "Ferramentas de Teste Não Funcional", correct: true },
                      { text: "Ferramentas de Projeto de Testes", correct: false }
                    ],
                    feedbackCorrect: "Correto! Testes de carga e estresse avaliam características não funcionais como performance e robustez.",
                    feedbackIncorrect: "Pense se essas ferramentas verificam 'o quê' o sistema faz ou 'quão bem' ele faz sob certas condições.",
                    explanation: "Ferramentas para testes de carga, estresse, performance, segurança, etc., são classificadas como ferramentas de Teste Não Funcional, pois avaliam características de qualidade do software que não são suas funcionalidades diretas."
                  }
            ]
        },
        {
            id: "6.2", 
            title: "6.2 Benefícios e Riscos da Automação de Teste", 
            icon: "🤖", 
            locked: true, 
            completed: false, 
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Automatizar testes é como ter um robô ajudante! 🤖 Quais os benefícios? Economia de tempo em tarefas repetitivas (regressão!), consistência (robôs não se cansam), prevenção de erros humanos, avaliação objetiva (cobertura) e feedback mais rápido!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Mas cuidado! Existem riscos. Expectativas irreais (automação não resolve tudo!), custos e esforço para introduzir e manter a automação, escolher a ferramenta errada, ou depender demais dela e esquecer do pensamento crítico humano."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual é um RISCO comum ao introduzir automação de testes?",
                    options: [
                      { text: "Redução do tempo de execução de testes de regressão.", correct: false },
                      { text: "Aumento da consistência na execução dos testes.", correct: false },
                      { text: "Subestimar o esforço necessário para manter os scripts de teste automatizados.", correct: true },
                      { text: "Melhora na detecção de defeitos repetitivos.", correct: false }
                    ],
                    feedbackCorrect: "Exato! Manter os robôs atualizados dá trabalho!",
                    feedbackIncorrect: "Pense nos desafios e problemas que podem surgir com a automação.",
                    explanation: "Um risco comum da automação de testes é subestimar o esforço contínuo necessário para manter os scripts de teste automatizados, especialmente quando o software sob teste muda frequentemente."
                  },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual é um benefício CHAVE da automação de testes, especialmente para testes de regressão?",
                    options: [
                        { text: "Elimina a necessidade de testes manuais.", correct: false },
                        { text: "É sempre mais barata que o teste manual a curto prazo.", correct: false },
                        { text: "Aumenta a consistência e repetibilidade da execução de testes.", correct: true },
                        { text: "Encontra todos os tipos de defeitos automaticamente.", correct: false }
                    ],
                    feedbackCorrect: "Perfeito! Robôs são ótimos em repetir tarefas sem errar! 👍",
                    feedbackIncorrect: "Pense na principal vantagem de ter uma máquina fazendo algo repetitivo.",
                    explanation: "A automação de testes, especialmente para suítes de regressão que são executadas frequentemente, oferece grande consistência e repetibilidade, reduzindo o esforço manual e a chance de erros humanos em tarefas repetitivas."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Entender os benefícios e riscos da automação é fundamental! Mas como realmente trazer essas ferramentas para o dia a dia? Vamos explorar algumas considerações estratégicas a seguir. 🤔"
                }
            ]
        },
        {
            id: "6.3",
            title: "6.3 Considerações Estratégicas para Ferramentas de Teste",
            icon: "🎯",
            locked: true,
            completed: false,
            slides: [
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Olá novamente, Mestre dos Testes! Já vimos os tipos de ferramentas e os prós e contras da automação. Mas como escolher e implementar ferramentas de forma inteligente na sua equipe ou projeto? 🧐"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Primeiro, defina uma estratégia clara! Pergunte-se: Quais são nossos maiores desafios de teste? Onde a automação traria mais valor? Quais processos queremos melhorar? Não compre uma ferramenta só porque está na moda!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Um passo crucial é realizar um Projeto Piloto! 🧪 Escolha uma área pequena e representativa para testar a ferramenta. Isso ajuda a entender a curva de aprendizado, a integração com seus sistemas e os benefícios reais antes de um grande investimento."
                },
                {
                    type: 'quiz',
                    character: 'professorBugsy',
                    question: "Qual o principal benefício de realizar um Projeto Piloto antes de adotar uma nova ferramenta de teste em larga escala?",
                    options: [
                      { text: "Garantir 100% de cobertura de teste imediatamente.", correct: false },
                      { text: "Avaliar a ferramenta em um contexto real, identificar desafios e benefícios antes de um grande investimento.", correct: true },
                      { text: "Substituir completamente os testes manuais.", correct: false },
                      { text: "Treinar toda a equipe de uma vez.", correct: false }
                    ],
                    feedbackCorrect: "Exato! Um piloto é um 'test drive' inteligente para a ferramenta! 🚗💨",
                    feedbackIncorrect: "Pense bem... O piloto serve para experimentar e aprender em menor escala primeiro.",
                    explanation: "Um projeto piloto permite avaliar a adequação da ferramenta, os desafios de implementação e os benefícios potenciais em um ambiente controlado e com menor risco, antes de um rollout completo."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Pense também no ROI (Retorno sobre o Investimento). A automação tem custos (ferramenta, treinamento, manutenção dos scripts). Compare esses custos com os benefícios esperados (tempo economizado, detecção mais rápida de defeitos, melhor qualidade)."
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "E não se esqueça do fator humano! Treinamento adequado, mudança cultural e o envolvimento da equipe são essenciais para o sucesso da adoção de qualquer ferramenta. Uma ferramenta é tão boa quanto as pessoas que a utilizam! 🧑‍💻🤝"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Com uma boa estratégia, avaliação cuidadosa e foco no valor, as ferramentas de teste podem se tornar aliadas poderosas na sua jornada pela qualidade do software! Continue explorando e aprendendo!"
                },
                {
                    type: 'content',
                    character: 'professorBugsy',
                    text: "Parabéns, Mestre dos Testes em formação! Você concluiu todos os capítulos do TestQuest Aventura! Continue praticando e aprendendo, o mundo do software precisa de heróis como você! 🎉✨"
                }
            ]
        }
    ]
  }
];

// App State
let currentScreen = 'home';
let currentModuleId = null;
let currentLessonId = null;
let currentSlideIndex = 0;
let quizAnswered = false;
let selectedOptionIndex = null;
let isCorrectAnswer = null;

const appContainer = document.getElementById('app-container');

function saveState() {
    localStorage.setItem('codeGuardianProData', JSON.stringify(syllabusData));
    localStorage.setItem('codeGuardianProProgress', JSON.stringify({
        currentScreen, currentModuleId, currentLessonId, currentSlideIndex
    }));
}

function loadState() {
    const savedData = localStorage.getItem('codeGuardianProData');
    if (savedData) {
        const loadedModules = JSON.parse(savedData);
        syllabusData.forEach(module => {
            const loadedModule = loadedModules.find(lm => lm.id === module.id);
            if (loadedModule) {
                module.lessons.forEach(lesson => {
                    const loadedLesson = loadedModule.lessons.find(ll => ll.id === lesson.id);
                    if (loadedLesson) {
                        lesson.completed = loadedLesson.completed;
                        lesson.locked = loadedLesson.locked;
                    }
                });
            }
        });
    }
     const savedProgress = localStorage.getItem('codeGuardianProProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentScreen = progress.currentScreen || 'home';
        currentModuleId = progress.currentModuleId || null;
        currentLessonId = progress.currentLessonId || null;
        currentSlideIndex = progress.currentSlideIndex || 0;
    }
}


function renderApp() {
  appContainer.innerHTML = ''; 

  const header = document.createElement('header');
  header.className = 'header';
  appContainer.appendChild(header);

  const titleText = document.createElement('span');
  titleText.className = 'header-title';
  
  let currentTitle = "CodeGuardian Pro"; 

  if (currentScreen === 'home') {
    if (currentModuleId) {
        const module = syllabusData.find(m => m.id === currentModuleId);
        if (module) currentTitle = module.title;
    } else {
        currentTitle = "CodeGuardian Pro"; 
    }
  } else if (currentScreen === 'lesson' && currentModuleId && currentLessonId) {
    const module = syllabusData.find(m => m.id === currentModuleId);
    const lesson = module?.lessons.find(l => l.id === currentLessonId);
    if (lesson) {
      currentTitle = lesson.title;
    }
  }
  titleText.textContent = currentTitle;


  if (currentScreen === 'lesson' || (currentScreen === 'home' && currentModuleId)) {
    const backButton = document.createElement('button');
    backButton.className = 'header-edge-element back-button';
    backButton.innerHTML = '&larr; Voltar'; 
    backButton.setAttribute('aria-label', 'Voltar');
    backButton.onclick = () => {
        if (currentScreen === 'lesson') {
            currentScreen = 'home'; 
            currentSlideIndex = 0;
            quizAnswered = false;
            selectedOptionIndex = null;
            isCorrectAnswer = null;
        } else if (currentModuleId) { 
            currentModuleId = null; 
        }
        renderApp();
    };
    header.appendChild(backButton);
    header.appendChild(titleText); 

    const spacer = document.createElement('div');
    spacer.className = 'header-edge-element header-spacer';
    spacer.innerHTML = '&larr; Voltar'; 
    header.appendChild(spacer);
    header.style.justifyContent = 'space-between';


  } else { 
    header.appendChild(titleText);
    header.style.justifyContent = 'center'; 
  }
  

  if (currentScreen === 'home') {
    renderHomeScreen();
  } else if (currentScreen === 'lesson' && currentModuleId && currentLessonId) {
    const module = syllabusData.find(m => m.id === currentModuleId);
    const lesson = module?.lessons.find(l => l.id === currentLessonId);
    if (lesson) {
      renderLessonScreen(lesson);
    } else {
      currentScreen = 'home'; 
      renderApp();
    }
  }
  saveState();
}

function renderHomeScreen() {
  const screen = document.createElement('div');
  screen.className = 'home-screen';

  if (!currentModuleId) { 
    const modulesTitle = document.createElement('h2');
    modulesTitle.className = 'screen-main-title';
    modulesTitle.textContent = 'Módulos de Aprendizagem';
    screen.appendChild(modulesTitle);

    const moduleList = document.createElement('ul');
    moduleList.className = 'module-list';
    moduleList.setAttribute('role', 'list');

    syllabusData.forEach(module => {
      const listItem = document.createElement('li');
      listItem.className = 'module-item';
      listItem.setAttribute('role', 'listitem');
      listItem.setAttribute('tabindex', '0');
      listItem.innerHTML = `
        <div class="module-info">
          <h3>${module.title}</h3>
          <p>${module.description}</p>
        </div>
      `;
      listItem.onclick = () => {
        currentModuleId = module.id;
        renderApp();
      };
      listItem.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') listItem.click(); };
      moduleList.appendChild(listItem);
    });
    screen.appendChild(moduleList);

  } else { 
    const module = syllabusData.find(m => m.id === currentModuleId);
    if (!module) {
      currentModuleId = null; 
      renderApp(); return;
    }
    const lessonsTitle = document.createElement('h3');
    lessonsTitle.className = 'screen-subtitle';
    lessonsTitle.textContent = 'Lições Disponíveis:';
    screen.appendChild(lessonsTitle);


    const lessonList = document.createElement('ul');
    lessonList.className = 'lesson-list';
    lessonList.setAttribute('role', 'list');

    module.lessons.forEach(lesson => {
      const listItem = document.createElement('li');
      listItem.className = 'lesson-item' + (lesson.locked ? ' locked' : '') + (lesson.completed ? ' completed' : '');
      listItem.setAttribute('role', 'listitem');
      listItem.setAttribute('tabindex', lesson.locked ? '-1' : '0');
      listItem.setAttribute('aria-disabled', lesson.locked.toString());
      if (lesson.completed) {
        listItem.setAttribute('aria-label', `${lesson.title} - Completado`);
      } else if (lesson.locked) {
        listItem.setAttribute('aria-label', `${lesson.title} - Bloqueado`);
      }

      const lessonInfo = document.createElement('div');
      lessonInfo.className = 'lesson-info';
      const lessonTitleH3 = document.createElement('h3');
      lessonTitleH3.textContent = lesson.title;
      lessonInfo.appendChild(lessonTitleH3);

      listItem.appendChild(lessonInfo);
      
      if (!lesson.locked) {
        listItem.onclick = () => {
          currentLessonId = lesson.id;
          currentScreen = 'lesson';
          currentSlideIndex = 0;
          quizAnswered = false;
          selectedOptionIndex = null;
          isCorrectAnswer = null;
          renderApp();
        };
        listItem.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') listItem.click(); };
      }
      lessonList.appendChild(listItem);
    });
    screen.appendChild(lessonList);
  }
  appContainer.appendChild(screen);
}

function renderLessonScreen(lesson) {
  const screen = document.createElement('div');
  screen.className = 'lesson-screen';

  if (!lesson.slides || lesson.slides.length === 0 || currentSlideIndex >= lesson.slides.length) {
    const emptyLessonView = document.createElement('div');
    emptyLessonView.className = 'lesson-screen-content'; 
    
    const messageContainer = document.createElement('div'); 
    messageContainer.style.textAlign = 'center';
    messageContainer.style.padding = '20px';
    
    const messageTitle = document.createElement('h3');
    messageTitle.textContent = 'Lição em Construção!';
    messageContainer.appendChild(messageTitle); 

    const messageText = document.createElement('p');
    messageText.textContent = 'Nossos amiguinhos estão trabalhando para trazer este conteúdo. Volte em breve!';
    messageContainer.appendChild(messageText);
    
    emptyLessonView.appendChild(messageContainer);

    const navigation = document.createElement('div');
    navigation.className = 'lesson-navigation';
    const backButtonToLessons = document.createElement('button'); 
    backButtonToLessons.className = 'nav-button';
    backButtonToLessons.textContent = 'Voltar às Lições';
    backButtonToLessons.onclick = () => {
        currentScreen = 'home'; 
        currentLessonId = null; 
        currentSlideIndex = 0; 
        quizAnswered = false;
        selectedOptionIndex = null;
        isCorrectAnswer = null;
        renderApp();
    };
    navigation.appendChild(backButtonToLessons);
    emptyLessonView.appendChild(navigation); 
    screen.appendChild(emptyLessonView);
    appContainer.appendChild(screen); 
    return; 
  }
  
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'lesson-screen-content';

  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar-container';
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = `${((currentSlideIndex + 1) / (lesson.slides.length || 1)) * 100}%`;
  progressBarContainer.appendChild(progressBar);
  contentWrapper.appendChild(progressBarContainer);


  const slide = lesson.slides[currentSlideIndex];
  const character = characters[slide.character];

  const characterArea = document.createElement('div');
  characterArea.className = 'character-area';
  
  const speechBubble = document.createElement('div');
  speechBubble.className = 'speech-bubble';

  characterArea.appendChild(speechBubble); 
  contentWrapper.appendChild(characterArea);

  if (slide.type === 'content') {
    speechBubble.innerHTML = `<p>${slide.text}</p>`;
  } else if (slide.type === 'quiz') {
    speechBubble.innerHTML = `<div class="question" role="heading" aria-level="3">${slide.question}</div>`;
    
    const optionsList = document.createElement('ul');
    optionsList.className = 'quiz-options';
    optionsList.setAttribute('role', 'radiogroup');
    slide.options.forEach((option, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = option.text;
      button.setAttribute('role', 'radio');
      button.setAttribute('aria-checked', (selectedOptionIndex === index).toString());
      if (quizAnswered) {
        button.disabled = true;
        if (option.correct) button.classList.add('correct');
        else if (selectedOptionIndex === index) button.classList.add('incorrect');
      } else {
         button.onclick = () => {
            selectedOptionIndex = index;
            renderApp(); 
         };
      }
      if (selectedOptionIndex === index) {
        button.classList.add('selected');
      }
      li.appendChild(button);
      optionsList.appendChild(li);
    });
    speechBubble.appendChild(optionsList);

    if (quizAnswered) {
      const feedbackArea = document.createElement('div');
      feedbackArea.className = 'feedback-area';
      if (isCorrectAnswer) {
        feedbackArea.classList.add('correct');
        feedbackArea.textContent = slide.feedbackCorrect;
      } else {
        feedbackArea.classList.add('incorrect');
        feedbackArea.textContent = slide.feedbackIncorrect;
      }
      if (slide.explanation) {
        const explanationP = document.createElement('p');
        explanationP.className = 'explanation';
        explanationP.textContent = slide.explanation;
        feedbackArea.appendChild(explanationP);
      }
      speechBubble.appendChild(feedbackArea);
    }
  }
  
  screen.appendChild(contentWrapper);

  const navigation = document.createElement('div');
  navigation.className = 'lesson-navigation';
  const navButton = document.createElement('button');
  navButton.className = 'nav-button';
  
  if (slide.type === 'quiz' && !quizAnswered) {
    navButton.textContent = 'Verificar';
    navButton.disabled = selectedOptionIndex === null;
    navButton.onclick = () => {
      quizAnswered = true;
      if (selectedOptionIndex !== null && slide.type === 'quiz') { 
        isCorrectAnswer = slide.options[selectedOptionIndex].correct;
      }
      renderApp(); 
    };
  } else if (currentSlideIndex < lesson.slides.length - 1) {
    navButton.textContent = 'Próximo';
    navButton.onclick = () => {
      currentSlideIndex++;
      quizAnswered = false;
      selectedOptionIndex = null;
      isCorrectAnswer = null;
      renderApp();
    };
  } else { 
    navButton.textContent = 'Concluir Lição';
    navButton.onclick = () => {
      lesson.completed = true;
      const module = syllabusData.find(m => m.id === currentModuleId);
      const currentLessonIndex = module.lessons.findIndex(l => l.id === currentLessonId);
      if (currentLessonIndex !== -1 && currentLessonIndex < module.lessons.length - 1) {
        module.lessons[currentLessonIndex + 1].locked = false;
      } else if (currentLessonIndex !== -1 && currentLessonIndex === module.lessons.length - 1) {
        const currentModuleIndex = syllabusData.findIndex(m => m.id === currentModuleId);
        if (currentModuleIndex !== -1 && currentModuleIndex < syllabusData.length - 1) {
            const nextModule = syllabusData[currentModuleIndex + 1];
            if (nextModule && nextModule.lessons.length > 0) {
                nextModule.lessons[0].locked = false;
            }
        }
      }

      currentScreen = 'home';
      currentLessonId = null; 
      currentSlideIndex = 0;
      quizAnswered = false;
      selectedOptionIndex = null;
      isCorrectAnswer = null;
      renderApp();
    };
  }

  navigation.appendChild(navButton);
  screen.appendChild(navigation);
  appContainer.appendChild(screen);
}

function initThreeJSBackground() {
    let scene;
    let camera;
    let renderer;
    let particles;
    let mouseX = 0;
    let mouseY = 0;

    const canvas = document.createElement('canvas');
    canvas.id = 'three-canvas';
    document.body.prepend(canvas);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 150; 

    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 

    const particleCount = 7000; 
    const positions = new Float32Array(particleCount * 3);
   
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600; 
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const particleBaseColor = isDarkMode ? 0xffffff : 0xaaaaaa; 

    const material = new THREE.PointsMaterial({
        size: 2.2, 
        color: particleBaseColor,
        blending: THREE.AdditiveBlending, 
        depthWrite: false, 
        transparent: true,
        sizeAttenuation: true,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - window.innerWidth / 2) / 4; 
        mouseY = (event.clientY - window.innerHeight / 2) / 4;
    }

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0002; 
        particles.rotation.y += 0.0003;
        camera.position.x += (mouseX - camera.position.x) * 0.02; 
        camera.position.y += (-mouseY - camera.position.y) * 0.02; 
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
}

loadState();
renderApp();
initThreeJSBackground();