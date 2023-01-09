export type participant = { id: string; person: string } | null;

type paritData = {
  title: string;
  sum: number;
  participants: participant[];
  each: number;
};

export default paritData;
