export interface QuestionInterface {
  question: string;
  response: string;
  className?: string;
  onClick: any;
  target: EventTarget | undefined;
  setTarget: React.Dispatch<React.SetStateAction<EventTarget | undefined>>;
  click: number;
}
