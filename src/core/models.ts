export interface Tab {
  name: string;
  routePath: string;
}

export interface ConversionRate {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, any>;
}
