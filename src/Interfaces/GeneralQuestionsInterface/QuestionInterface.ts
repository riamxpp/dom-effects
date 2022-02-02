export interface QuestionInterface {
  question: string;
  response: string;
  className?: string;
  onClick: any;
  target: EventTarget | undefined;
}
