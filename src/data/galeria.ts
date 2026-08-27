import foto1 from "../assets/dialogo-articulacao-1.webp";

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
];
