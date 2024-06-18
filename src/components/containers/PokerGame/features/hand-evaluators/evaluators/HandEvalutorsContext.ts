import type { EvaluatorContext, HandEvaluator } from "../types";

export default class HandEvalutorsContext implements EvaluatorContext {
  constructor(private handEvaluator: HandEvaluator) {}

  public evaluate() {
    return this.handEvaluator.evaluate();
  }
}
