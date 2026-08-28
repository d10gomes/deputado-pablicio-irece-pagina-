import foto1 from "../assets/dialogo-articulacao-1.webp";
import foto2 from "../assets/dialogo-articulacao-2.webp";
import foto3 from "../assets/dialogo-articulacao-3.webp";
import foto4 from "../assets/dialogo-articulacao-4.webp";
import foto5 from "../assets/dialogo-articulacao-5.webp";
import foto6 from "../assets/dialogo-articulacao-6.webp";
import foto7 from "../assets/dialogo-articulacao-7.webp";

export type FotoGaleria = {
  src: string;
  legenda: string;
};

// Adicione novas fotos aqui — cada uma vira um card na seção "Diálogo e Articulação".
export const galeria: FotoGaleria[] = [
  {
    src: foto1,
    legenda:
      "João Roma (candidato a Senador), Dr. Pablício Medeiros, ACM Neto (candidato a Governador) e Bruno Reis (prefeito de Salvador)",
  },
  {
    src: foto2,
    legenda: "ACM Neto (candidato a Governador) e Dr. Pablício Medeiros",
  },
  {
    src: foto3,
    legenda:
      "João Roma (candidato a Senador), Dr. Pablício Medeiros e Flávio Bolsonaro (candidato a Presidente da República)",
  },
  {
    src: foto4,
    legenda:
      "Dr. Pablício Medeiros, Ana Campagnolo (candidata a Deputada Estadual) e Dr. Danilo",
  },
  {
    src: foto5,
    legenda: "Júnior Marabá (prefeito de Luís Eduardo Magalhães) e Dr. Pablício Medeiros",
  },
  {
    src: foto6,
    legenda: "Senador Ângelo Coronel e Dr. Pablício Medeiros",
  },
  {
    src: foto7,
    legenda: "Dr. Pablício Medeiros no Partido Liberal (PL) da Bahia",
  },
];
