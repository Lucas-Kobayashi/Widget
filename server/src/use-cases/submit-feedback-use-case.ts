import { FeedbacksRepository } from "../repositories/feedback-repository";

export interface SubmitFeedbackUsecaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUsecase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(request: SubmitFeedbackUsecaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    });
  }
}
