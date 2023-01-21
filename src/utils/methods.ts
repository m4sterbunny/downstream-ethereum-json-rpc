type PrimitiveParamType =
  | 'addr'
  | 'hash'
  | 'bytes32'
  | 'bytes'
  | 'int'
  | 'boolean'
  | 'block';

interface OptionalParam {
  isRequired: false;
}

interface RequiredParam {
  isRequired: true;
  default: unknown;
}

type OptionalOrRequiredParam = OptionalParam | RequiredParam;

type PrimitiveParam = OptionalOrRequiredParam & {
  type: PrimitiveParamType;
  name: string;
  description?: string;
};

type ArrayParam = {
  type: 'array';
  itemType: PrimitiveParamType;
  name: string;
  description?: string;
  count?: number;
};

type ObjectParam = {
  type: 'object';
  name: string;
  description?: string;
  items: Record<string, Param>;
};

type Param = PrimitiveParam | ArrayParam | ObjectParam;

type MethodType = 'standard';

interface Method {
  id: MethodId;
  name: string;
  type: MethodType;
  description: string;
  params: Param[];
  formatter?: (params: unknown[]) => unknown[];
}

const CHAIN_ID = 'eth_chainId';
const BLOCK_NUMBER = 'eth_blockNumber';
const GAS_PRICE = 'eth_gasPrice';
const MAX_PRIORITY_FEE_PER_GAS = 'eth_maxPriorityFeePerGas';
const FEE_HISTORY = 'eth_feeHistory';
const GET_BALANCE = 'eth_getBalance';
const GET_CODE = 'eth_getCode';
const GET_STORAGE_AT = 'eth_getStorageAt';
const CALL = 'eth_call';
const ESTIMATE_GAS = 'eth_estimateGas';
const GET_LOGS = 'eth_getLogs';
const GET_PROOF = 'eth_getProof';
const GET_TRANSACTION_COUNT = 'eth_getTransactionCount';
const GET_BLOCK_BY_NUMBER = 'eth_getBlockByNumber';
const GET_BLOCK_BY_HASH = 'eth_getBlockByHash';
const GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER =
  'eth_getBlockTransactionCountByNumber';
const GET_BLOCK_TRANSACTION_COUNT_BY_HASH =
  'eth_getBlockTransactionCountByHash';
const GET_UNCLE_COUNT_BY_BLOCK_NUMBER = 'eth_getUncleCountByBlockNumber';
const GET_UNCLE_COUNT_BY_BLOCK_HASH = 'eth_getUncleCountByBlockHash';
const GET_TRANSACTION_BY_HASH = 'eth_getTransactionByHash';
const GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX =
  'eth_getTransactionByBlockNumberAndIndex';
const GET_TRANSACTION_BY_BLOCK_HASH_AND_INDEX =
  'eth_getTransactionByBlockHashAndIndex';
const GET_TRANSACTION_RECEIPT = 'eth_getTransactionReceipt';
const GET_UNCLE_BY_BLOCK_NUMBER_AND_INDEX = 'eth_getUncleByBlockNumberAndIndex';
const GET_UNCLE_BY_BLOCK_HASH_AND_INDEX = 'eth_getUncleByBlockHashAndIndex';
const SYNCING = 'eth_syncing';
const COINBASE = 'eth_coinbase';
const ACCOUNTS = 'eth_accounts';

type MethodId =
  | typeof CHAIN_ID
  | typeof BLOCK_NUMBER
  | typeof GAS_PRICE
  | typeof MAX_PRIORITY_FEE_PER_GAS
  | typeof FEE_HISTORY
  | typeof GET_BALANCE
  | typeof GET_CODE
  | typeof GET_STORAGE_AT
  | typeof CALL
  | typeof ESTIMATE_GAS
  | typeof GET_LOGS
  | typeof GET_PROOF
  | typeof GET_TRANSACTION_COUNT
  | typeof GET_BLOCK_BY_NUMBER
  | typeof GET_BLOCK_BY_HASH
  | typeof GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER
  | typeof GET_BLOCK_TRANSACTION_COUNT_BY_HASH
  | typeof GET_UNCLE_COUNT_BY_BLOCK_NUMBER
  | typeof GET_UNCLE_COUNT_BY_BLOCK_HASH
  | typeof GET_TRANSACTION_BY_HASH
  | typeof GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX
  | typeof GET_TRANSACTION_BY_BLOCK_HASH_AND_INDEX
  | typeof GET_TRANSACTION_RECEIPT
  | typeof GET_UNCLE_BY_BLOCK_NUMBER_AND_INDEX
  | typeof GET_UNCLE_BY_BLOCK_HASH_AND_INDEX
  | typeof ACCOUNTS
  | typeof COINBASE
  | typeof SYNCING;

function getArrayParamItem(param: ArrayParam, index: number): PrimitiveParam {
  return {
    type: param.itemType,
    name: index.toString(),
    isRequired: false,
  };
}

export {
  CHAIN_ID,
  BLOCK_NUMBER,
  GAS_PRICE,
  MAX_PRIORITY_FEE_PER_GAS,
  FEE_HISTORY,
  GET_BALANCE,
  GET_CODE,
  GET_STORAGE_AT,
  CALL,
  ESTIMATE_GAS,
  GET_LOGS,
  GET_PROOF,
  GET_TRANSACTION_COUNT,
  GET_BLOCK_BY_NUMBER,
  GET_BLOCK_BY_HASH,
  GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER,
  GET_BLOCK_TRANSACTION_COUNT_BY_HASH,
  GET_UNCLE_COUNT_BY_BLOCK_NUMBER,
  GET_UNCLE_COUNT_BY_BLOCK_HASH,
  GET_TRANSACTION_BY_HASH,
  GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX,
  GET_TRANSACTION_BY_BLOCK_HASH_AND_INDEX,
  GET_TRANSACTION_RECEIPT,
  GET_UNCLE_BY_BLOCK_NUMBER_AND_INDEX,
  GET_UNCLE_BY_BLOCK_HASH_AND_INDEX,
  ACCOUNTS,
  COINBASE,
  SYNCING,
  ArrayParam,
  Method,
  MethodId,
  Param,
  PrimitiveParam,
  getArrayParamItem,
};
