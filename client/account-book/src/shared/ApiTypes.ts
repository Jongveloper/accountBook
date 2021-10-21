export type SignUpType = {
  username: string;
  password: string;
  name: string;
};

export type SignInType = {
  username: string;
  password: string;
};

export type TagType = {
  tagname: string;
  color: string;
};

export type AccountType = {
  year: string;
  month: string;
  day: string;
  tag: string;
  income: number;
  expenditure: number;
};
