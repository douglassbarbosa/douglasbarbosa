/* ── i18n — Douglas Barbosa ── */

const i18n = {
  en: {
    nav: {
      skills:   "My Skills",
      services: "How can I help you?",
      portfolio:"What I did.",
      posts:    "Posts",
      contact:  "Contact"
    },
    home: {
      role:     "Software Engineer",
      title1:   "Douglas",
      title2:   "Barbosa.",
      subtitle1:"Software is just the medium.",
      subtitle2:"What I'm really building is outcomes.",
      links: [
        { num:"01", label:"My Skills.",            sub:"Technical & soft skills" },
        { num:"02", label:"How can I help you?",   sub:"Freelance & consulting" },
        { num:"03", label:"What I did.",            sub:"Projects & case studies" },
        { num:"04", label:"Posts.",                 sub:"Technical & professional notes" }
      ]
    },
    skills: {
      pageLabel: "01 — My Skills",
      title1: "What I",
      title2: "know how to do.",
      sub: "5+ years building enterprise systems across the full stack.",
      stats: [
        { num:"5", suf:"+", label:"Years of experience" },
        { num:"100", suf:"+", label:"Features in production" },
        { num:"1", suf:"M+", label:"Daily transactions supported" },
        { num:"3", suf:"", label:"Countries worked across" }
      ],
      techTitle: "Technical Skills",
      groups: [
        { label:"Backend",             tags:["C#",".NET Core","ASP.NET","Node.js","NestJS","Entity Framework"], color:"blue" },
        { label:"Frontend",            tags:["ReactJS","TypeScript","Angular","JavaScript"], color:"cyan" },
        { label:"APIs & Architecture", tags:["REST APIs","GraphQL","Microservices","DDD","Event-Driven"], color:"blue" },
        { label:"DevOps & Databases",  tags:["Docker","Kubernetes","GitLab CI/CD","Jenkins","SQL Server","PostgreSQL","MongoDB"], color:"gray" },
        { label:"Process & Agile",     tags:["Scrum","Kanban","Jira","Code Review","Unit Testing"], color:"gray" }
      ],
      softLabel: "Beyond the code",
      softTitle1:"How I show up",
      softTitle2:"at work.",
      softCards: [
        { icon:"🧭", title:"Technical Leadership",       desc:"Mentored junior developers and guided critical technical decisions across engineering and product teams." },
        { icon:"🗣️", title:"Clear Communication",        desc:"Bridged the gap between business and engineering — as Product Owner, IT Ops Manager, and engineer in the same career." },
        { icon:"🔍", title:"Ownership Mindset",          desc:"Owned the full SDLC end-to-end: planning, development, testing, deployment and post-production." },
        { icon:"⚙️", title:"Problem Solving",            desc:"Reduced technical debt and static analysis warnings by ~20% through targeted refactoring and architectural improvements." },
        { icon:"🌍", title:"Cross-cultural Collaboration",desc:"Worked across Brazil, Ireland and Europe in remote, hybrid and on-site environments in Portuguese and English." }
      ],
      closingQ:    "Why does this matter?",
      closingText: "I don't just write code — I ask what we're actually trying to solve. Software is just the medium. <em>What I'm really building is outcomes</em> — for users, teams, and the business."
    },
    services: {
      pageLabel: "02 — How can I help you?",
      title1: "Let's solve",
      title2: "something real.",
      sub: "I work with businesses and individual entrepreneurs who need more than just someone to write code.",
      cards: [
        {
          icon:"🧠", num:"01",
          title:"Technical Consulting",
          desc:"You have a product, a team, or a technical challenge — and you need someone who understands both the code and the business impact. I help you make better decisions before they become expensive ones.",
          tags:["Architecture review","Tech roadmap","Team assessment","Code audit"]
        },
        {
          icon:"⚡", num:"02",
          title:"Systems & API Development",
          desc:"From backend services and REST/GraphQL APIs to full-stack features — I build things that scale, perform, and are easy for your team to maintain after I'm done.",
          tags:[".NET / Node.js","REST & GraphQL","Microservices","CI/CD"]
        },
        {
          icon:"🌐", num:"03",
          title:"Websites for Business & Entrepreneurs",
          desc:"A professional web presence that represents who you are and what you do — clean, fast, and built to convert. For companies and individuals who take their brand seriously.",
          tags:["React / Next.js","Performance","Mobile-first","SEO-ready"]
        }
      ],
      howLabel: "How I work",
      howSteps: [
        { num:"01", title:"Understand first",     desc:"Before writing a single line, I ask the right questions — about your goals, your users, your constraints." },
        { num:"02", title:"Propose clearly",       desc:"You get a clear scope, timeline and approach — no surprises, no jargon." },
        { num:"03", title:"Build with ownership",  desc:"I treat your project like mine — quality, communication, and delivery matter throughout." },
        { num:"04", title:"Hand over properly",    desc:"Your team inherits something they can understand, maintain, and build on." }
      ],
      ctaLabel:  "Ready to talk?",
      ctaTitle1: "Tell me what",
      ctaTitle2: "you're building.",
      ctaSub:    "No long forms, no commitments. Just a conversation about what you need.",
      ctaBtn1:   "Send me a message",
      ctaBtn2:   "dev@douglasbarbosa.com"
    },
    portfolio: {
      pageLabel: "03 — What I did.",
      title1: "Things I've",
      title2: "built & shipped.",
      sub: "Projects, systems, websites and documentation — growing as I build.",
      filters: ["All","App","Website","Doc / Brand","API / System"],
      addNote: "<strong>More coming.</strong> This page grows as I ship — apps, systems, client websites and more."
    },
    posts: {
      pageLabel: "04 — Posts",
      title1: "Things I think",
      title2: "about out loud.",
      sub: "Technical notes, career thoughts and professional reflections — short or long, whenever worth sharing.",
      filters: ["All","Technical","Career","Reflections","Articles","Quick Notes"],
      addNote: "<strong>Growing over time.</strong> New posts whenever there's something worth saying — no schedule, no filler.",
      emptyText: "No posts in this category yet.<br>Check back soon.",
      readMore: "Read post",
      minRead: "min read"
    },
    post: {
      backLabel: "← Posts",
      nextLabel: "Next post",
      backToLabel: "Back to",
      backToAll: "All posts",
      linksLabel: "Useful links & references",
      notesLabel: "Notes"
    },
    footer: { copy: "© 2026 Douglas Barbosa" }
  },

  pt: {
    nav: {
      skills:   "Minhas Skills",
      services: "Como posso te ajudar?",
      portfolio:"O que eu fiz.",
      posts:    "Posts",
      contact:  "Contato"
    },
    home: {
      role:     "Engenheiro de Software",
      title1:   "Douglas",
      title2:   "Barbosa.",
      subtitle1:"Software é apenas o meio.",
      subtitle2:"O que eu realmente construo são resultados.",
      links: [
        { num:"01", label:"Minhas Skills.",           sub:"Habilidades técnicas e comportamentais" },
        { num:"02", label:"Como posso te ajudar?",    sub:"Freelance & consultoria" },
        { num:"03", label:"O que eu fiz.",             sub:"Projetos & cases" },
        { num:"04", label:"Posts.",                    sub:"Notas técnicas e profissionais" }
      ]
    },
    skills: {
      pageLabel: "01 — Minhas Skills",
      title1: "O que eu",
      title2: "sei fazer.",
      sub: "5+ anos construindo sistemas empresariais em toda a stack.",
      stats: [
        { num:"5", suf:"+", label:"Anos de experiência" },
        { num:"100", suf:"+", label:"Funcionalidades em produção" },
        { num:"1", suf:"M+", label:"Transações diárias suportadas" },
        { num:"3", suf:"", label:"Países em que trabalhei" }
      ],
      techTitle: "Habilidades Técnicas",
      groups: [
        { label:"Backend",              tags:["C#",".NET Core","ASP.NET","Node.js","NestJS","Entity Framework"], color:"blue" },
        { label:"Frontend",             tags:["ReactJS","TypeScript","Angular","JavaScript"], color:"cyan" },
        { label:"APIs & Arquitetura",   tags:["REST APIs","GraphQL","Microservices","DDD","Event-Driven"], color:"blue" },
        { label:"DevOps & Bancos",      tags:["Docker","Kubernetes","GitLab CI/CD","Jenkins","SQL Server","PostgreSQL","MongoDB"], color:"gray" },
        { label:"Processo & Agilidade", tags:["Scrum","Kanban","Jira","Code Review","Testes Unitários"], color:"gray" }
      ],
      softLabel: "Além do código",
      softTitle1:"Como eu me apresento",
      softTitle2:"no trabalho.",
      softCards: [
        { icon:"🧭", title:"Liderança Técnica",          desc:"Mentorei desenvolvedores juniores e guiei decisões técnicas críticas em times de engenharia e produto." },
        { icon:"🗣️", title:"Comunicação Clara",           desc:"Fiz a ponte entre negócio e tecnologia — como Product Owner, Gestor de TI e Engenheiro na mesma carreira." },
        { icon:"🔍", title:"Mentalidade de Dono",         desc:"Assumi o SDLC completo: planejamento, desenvolvimento, testes, deploy e pós-produção." },
        { icon:"⚙️", title:"Resolução de Problemas",      desc:"Reduzi débito técnico e avisos de análise estática em ~20% com refatoração e melhorias arquiteturais." },
        { icon:"🌍", title:"Colaboração Multicultural",   desc:"Trabalhei no Brasil, Irlanda e Europa em ambientes remotos, híbridos e presenciais, em português e inglês." }
      ],
      closingQ:    "Por que isso importa?",
      closingText: "Eu não só escrevo código — eu pergunto o que realmente estamos tentando resolver. Software é apenas o meio. <em>O que eu realmente construo são resultados</em> — para usuários, times e o negócio."
    },
    services: {
      pageLabel: "02 — Como posso te ajudar?",
      title1: "Vamos resolver",
      title2: "algo de verdade.",
      sub: "Trabalho com empresas e empreendedores individuais que precisam de mais do que alguém para escrever código.",
      cards: [
        {
          icon:"🧠", num:"01",
          title:"Consultoria Técnica",
          desc:"Você tem um produto, um time ou um desafio técnico — e precisa de alguém que entenda o código e o impacto no negócio. Ajudo você a tomar melhores decisões antes que elas se tornem caras.",
          tags:["Revisão de arquitetura","Roadmap técnico","Avaliação de time","Auditoria de código"]
        },
        {
          icon:"⚡", num:"02",
          title:"Desenvolvimento de Sistemas & APIs",
          desc:"De serviços backend e APIs REST/GraphQL a funcionalidades full-stack — construo coisas que escalam, performam e são fáceis de manter pelo seu time depois que termino.",
          tags:[".NET / Node.js","REST & GraphQL","Microsserviços","CI/CD"]
        },
        {
          icon:"🌐", num:"03",
          title:"Sites para Empresas & Empreendedores",
          desc:"Uma presença digital profissional que representa quem você é e o que você faz — limpa, rápida e construída para converter. Para empresas e pessoas que levam sua marca a sério.",
          tags:["React / Next.js","Performance","Mobile-first","SEO"]
        }
      ],
      howLabel: "Como eu trabalho",
      howSteps: [
        { num:"01", title:"Entender primeiro",         desc:"Antes de escrever uma linha, faço as perguntas certas — sobre seus objetivos, seus usuários, suas restrições." },
        { num:"02", title:"Propor com clareza",        desc:"Você recebe escopo, prazo e abordagem claros — sem surpresas, sem jargão." },
        { num:"03", title:"Construir com responsabilidade", desc:"Trato seu projeto como meu — qualidade, comunicação e entrega importam durante todo o processo." },
        { num:"04", title:"Entregar corretamente",     desc:"Seu time herda algo que consegue entender, manter e evoluir." }
      ],
      ctaLabel:  "Pronto para conversar?",
      ctaTitle1: "Me conta o que",
      ctaTitle2: "você está construindo.",
      ctaSub:    "Sem formulários longos, sem compromissos. Apenas uma conversa sobre o que você precisa.",
      ctaBtn1:   "Me envie uma mensagem",
      ctaBtn2:   "dev@douglasbarbosa.com"
    },
    portfolio: {
      pageLabel: "03 — O que eu fiz.",
      title1: "Coisas que",
      title2: "construí e publiquei.",
      sub: "Projetos, sistemas, sites e documentação — crescendo conforme eu construo.",
      filters: ["Todos","App","Website","Doc / Brand","API / Sistema"],
      addNote: "<strong>Mais em breve.</strong> Esta página cresce conforme eu publico — apps, sistemas, sites e mais."
    },
    posts: {
      pageLabel: "04 — Posts",
      title1: "Coisas que penso",
      title2: "em voz alta.",
      sub: "Notas técnicas, reflexões de carreira e pensamentos profissionais — curtos ou longos, quando vale a pena compartilhar.",
      filters: ["Todos","Técnico","Carreira","Reflexões","Artigos","Notas Rápidas"],
      addNote: "<strong>Crescendo com o tempo.</strong> Novos posts quando há algo que vale dizer — sem agenda, sem enchimento.",
      emptyText: "Nenhum post nessa categoria ainda.<br>Volte em breve.",
      readMore: "Ler post",
      minRead: "min de leitura"
    },
    post: {
      backLabel: "← Posts",
      nextLabel: "Próximo post",
      backToLabel: "Voltar para",
      backToAll: "Todos os posts",
      linksLabel: "Links úteis & referências",
      notesLabel: "Notas"
    },
    footer: { copy: "© 2026 Douglas Barbosa" }
  }
};

/* ── Language manager ── */
const Lang = (() => {
  const STORAGE_KEY = 'db_lang';

  function get() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function set(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function apply(lang) {
    set(lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = resolve(i18n[lang], key);
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('.db-lang button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }

  function resolve(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function init() {
    const lang = get();
    apply(lang);
    document.querySelectorAll('.db-lang button').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.getAttribute('data-lang')));
    });
  }

  return { get, set, apply, init };
})();

/* ── Nav toggle ── */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && e.target !== hamburger) {
      drawer.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  Lang.init();
  initNav();
});
