import type { HandEvaluator } from "./types";

export default class HandEvalutorsContext {
  private handEvaluator;

  constructor(handEvaluator: HandEvaluator) {
    this.handEvaluator = handEvaluator;
  }

  public evaluate() {
    return this.handEvaluator.evaluate();
  }
}
