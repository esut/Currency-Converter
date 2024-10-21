export interface Currency {
    code: string;
    name: string;
  }
  
  export interface ExchangeRateResponse {
    rates: {
      [key: string]: number;
    };
  }