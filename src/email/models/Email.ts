export interface IEmail {
  assunto: string;
  mensagem: string;
  destinatario: {
    nome?: string;
    email: string;
  }[];
}
