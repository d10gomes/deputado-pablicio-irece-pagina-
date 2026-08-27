import foto1 from "../assets/dialogo-articulacao-1.webp";
import foto2 from "../assets/dialogo-articulacao-2.webp";
import foto3 from "../assets/dialogo-articulacao-3.webp";

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
];
