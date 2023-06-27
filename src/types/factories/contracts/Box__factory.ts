/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

import type { Box, BoxInterface } from "../../contracts/Box";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610187806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d8565b60405180910390f35b610073600480360381019061006e9190610124565b61007e565b005b60008054905090565b806000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516100b491906100d8565b60405180910390a150565b6000819050919050565b6100d2816100bf565b82525050565b60006020820190506100ed60008301846100c9565b92915050565b600080fd5b610101816100bf565b811461010c57600080fd5b50565b60008135905061011e816100f8565b92915050565b60006020828403121561013a576101396100f3565b5b60006101488482850161010f565b9150509291505056fea264697066735822122081996f1a296ef17d76ff30fde965e44e50774176b7c56b90188ac58aca22826f64736f6c63430008110033";

type BoxConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BoxConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Box> {
    return super.deploy(overrides || {}) as Promise<Box>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Box {
    return super.attach(address) as Box;
  }
  override connect(signer: Signer): Box__factory {
    return super.connect(signer) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new utils.Interface(_abi) as BoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Box {
    return new Contract(address, _abi, signerOrProvider) as Box;
  }
}
