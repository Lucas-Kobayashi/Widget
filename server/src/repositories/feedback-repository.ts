// O "?" significa que o campo é opcional, e ao contrário do prisma deve ser usado antes de passar o tipo de dado.
// A utilização de "Promise" se dá ao fato de tornar a função assincrona (O Javascript pede que toda função assincrona retorne uma "Promisse").

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
