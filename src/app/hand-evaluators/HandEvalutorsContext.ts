import type { HandEvaluator } from "./types";

export default class HandEvalutorsContext {
  constructor(private handEvaluator: HandEvaluator) {}

  public evaluate() {
    return this.handEvaluator.evaluate();
  }
}
