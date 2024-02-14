interface ISavingsEntry {
  route: any;
  navigation: any;
}

interface ISavingEntryForm {
  name: string;
  date: string;
  amount: string;
}

export type { ISavingsEntry, ISavingEntryForm };
