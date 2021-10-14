export type DataProps = {
  data: StateProps[];
  status: string;
};

export type StateProps = {
  id: string;
  title: string;
  value: number;
};

export type BrazilSvgProps = {
  id: UF;
  title: string;
  value: number;
  path: string;
};

export enum ColorSchema {
  Empty = "#c4c4c4",
  Min = "#d6d6d6",
  Step1 = "#939393",
  Step2 = "#666666",
  Max = "#4c4c4c",
}

export enum UF {
  Amazonas = "AM",
  Acre = "AC",
  Amapa = "AP",
  Alagoas = "AL",
  Bahia = "BA",
  EspíritoSanto = "ES",
  DistritoFederal = "DF",
  Goias = "GO",
  Ceara = "CE",
  Maranhao = "MA",
  MinasGerais = "MG",
  RiodeJaneiro = "RJ",
  RioGrandedoSul = "RS",
  MatoGrossodoSul = "MS",
  MatoGrosso = "MT",
  Para = "PA",
  Parana = "PR",
  Pernambuco = "PE",
  Paraiba = "PB",
  Piaui = "PI",
  RioGrandedoNorte = "RN",
  Sergipe = "SE",
  Rondonia = "RO",
  Roraima = "RR",
  SantaCatarina = "SC",
  SaoPaulo = "SP",
  Tocantins = "TO",
}
