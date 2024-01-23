interface ITextEntry {
  value: string;
  placeholder?: string;
  handleOnChange: (text: string) => void;
}

export type { ITextEntry };
