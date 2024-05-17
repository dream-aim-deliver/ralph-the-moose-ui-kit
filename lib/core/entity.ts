export type TChainConfig = {
  chainId: number;
  name: string;
  rpcUrl: string;
  jsonRpcProvider: string;
  explorerUrl: string;
  explorerName: string;
  gasLimit: number;
  icon: React.ReactNode;
  networkCurrency: string;
  mintingFee: number;
  wrappingFee: number;
  unwrappingFee: number;
  ralphReservoirAddress: string;
  ralphTokenAddress: string;
};

export type TChainViewModel = {
  chainId: number;
  name: string;
};
