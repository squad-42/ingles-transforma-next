import {
  FaChalkboardTeacher,
  FaHome,
  FaGraduationCap,
  FaQuestion,
  FaHeadset,
  FaCode,
  FaPen,
  FaChartLine,
  FaMusic,
  FaChartBar,
  FaPencilAlt,
  FaUser,
  FaUsers,
  FaFile,
  FaChild
} from "react-icons/fa";

import { HiPencilSquare } from "react-icons/hi2";

export const sidebarOptions = [
  {
    texto: 'Home',
    link: '/',
    icone: FaHome
  },
  {
    texto: 'Cursos',
    link: '/cursos',
    icone: FaGraduationCap
  },
  {
    texto: 'Professores',
    link: '/professores',
    icone: FaChalkboardTeacher
  },
  {
    texto: 'Contato',
    link: '/contato',
    icone: FaHeadset
  },
  {
    texto: 'Sobre',
    link: '/sobre',
    icone: FaQuestion
  },
]

export const categorias = [
  {
    icone: FaCode,
    nome: "gramática"
  },
  {
    icone: FaChartBar,
    nome: "sintaxe"
  },
  {
    icone: FaPen,
    nome: "vocabulário"
  },
  {
    icone: FaChartLine,
    nome: "compreensão"
  },
  {
    icone: FaMusic,
    nome: "expressão oral"
  }
]

export const topicos = [
  {
    icone: FaPen,
    nome: "verb tenses"
  },
  {
    icone: HiPencilSquare,
    nome: "verb moodes"
  },
  {
    icone: FaUser,
    nome: "pronouns"
  },
  {
    icone: FaUsers,
    nome: "conjugation"
  },
  {
    icone: FaFile,
    nome: "articles"
  },
  {
    icone: FaChild,
    nome: "adjectives"
  }
]

export const listaCursos = [
  {
    cod: "1",
    prof: "Luna Lovegood",
    profPic: 2,
    data: "05-05-2023",
    numDeVid: 2,
    thumb: 3,
    nome: "Preparação - Exames de Proficiência",
    aulas: [
      {
        cod: "1",
        thumb: 3,
        course: "Preparação - Exames de Proficiência"
      },
      {
        cod: "2",
        thumb: 3,
        course: "Preparação - Exames de Proficiência"
      }
    ]
  },
  {
    cod: "2",
    prof: "Ron Weasley",
    profPic: 3,
    data: "11-05-2023",
    numDeVid: 13,
    thumb: 2,
    nome: "Inglês para Negócios",
    aulas: [
      {
        cod: "1",
        thumb: 2,
        course: ""
      },
      {
        cod: "2",
        thumb: 2,
        course: ""
      }
    ]
  },
  {
    cod: "3",
    prof: "Albus Dumbledore",
    profPic: 9,
    data: "21-07-2023",
    numDeVid: 10,
    thumb: 1,
    nome: "Inglês Geral",
    aulas: [
      {
        cod: "1",
        thumb: 1,
        course: ""
      },
      {
        cod: "2",
        thumb: 1,
        course: ""
      }
    ]
  },
  {
    cod: "4",
    prof: "Hermione Granger",
    profPic: 5,
    data: "07-07-2023",
    numDeVid: 25,
    thumb: 4,
    nome: "Inglês Acadêmico",
    aulas: [
      {
        cod: "1",
        thumb: 4,
        course: ""
      },
      {
        cod: "2",
        thumb: 4,
        course: ""
      }
    ]
  },
  {
    cod: "5",
    prof: "Draco Malfoy",
    profPic: 6,
    data: "27-06-2023",
    numDeVid: 16,
    thumb: 5,
    nome: "Inglês para viagens",
    aulas: [
      {
        cod: "1",
        thumb: 5,
        course: ""
      },
      {
        cod: "2",
        thumb: 5,
        course: ""
      }
    ]
  },
  {
    cod: "6",
    prof: "Minerva McGonagall",
    profPic: 7,
    data: "09-06-2023",
    numDeVid: 12,
    thumb: 6,
    nome: "Inglês Técnico para área de TI",
    aulas: [
      {
        cod: "1",
        thumb: 6,
        course: ""
      },
      {
        cod: "2",
        thumb: 6,
        course: ""
      }
    ]
  },
]


export const sobreCards = [
  {
    img: "missão",
    titulo: "MISSÃO",
    texto: "Nossa missão é clara e ambiciosa: proporcionar a cada indivíduo a chance de dominar o inglês e expandir suas perspectivas. Acreditamos que o inglês é mais do que apenas um idioma - é uma ferramenta que abreportas para oportunidades educacionais, profissionais e culturais. Movidos por essa crença, estamos empenhados em oferecer uma plataforma de aprendizado que não só ensina, mas também capacita, inspira e conecta.",
  },
  {
    img: "visao",
    titulo: "VISÃO",
    texto: "Visualizamos uma plataforma inovadora, reconhecida pela sua eficácia e abordagem inclusiva. Queremos ser a primeira escolha para quem busca aprender inglês, oferecendo recursos interativos e personalizados que se adaptam às necessidades individuais dos alunos. Almejamos construir uma comunidade diversificada e unida, unindo culturas e possibilitando uma compreensão mais profunda entre as pessoas por meio da língua inglesa.",
  },
  {
    img: "valores",
    titulo: "VALORES",
    texto: "<b> Acessibilidade Universal:</b> Acreditamos que a educação de qualidade deve ser acessível a todos, independentemente de sua origem socioeconômica. </p><p><b> Inclusão:</b> Valorizamos a diversidade e a inclusão, criando um ambiente de aprendizado onde todos os alunos se sintam bem-vindos e respeitados, independentemente de sua origem étnica, cultural ou social.</p>",
  },
]