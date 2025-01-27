export const orderCreatedEventAbi = {
  type: 'event',
  name: 'OrderCreated',
  inputs: [
    {
      name: 'orderId',
      type: 'bytes32',
      indexed: true,
      internalType: 'bytes32',
    },
    {
      name: 'nonce',
      type: 'uint256',
      indexed: false,
      internalType: 'uint256',
    },
    {
      name: 'order',
      type: 'tuple',
      indexed: false,
      internalType: 'struct Validator.Order',
      components: [
        {
          name: 'user',
          type: 'tuple',
          internalType: 'struct bytes64',
          components: [
            {
              name: 'lower',
              type: 'bytes32',
              internalType: 'bytes32',
            },
            {
              name: 'upper',
              type: 'bytes32',
              internalType: 'bytes32',
            },
          ],
        },
        {
          name: 'filler',
          type: 'tuple',
          internalType: 'struct bytes64',
          components: [
            {
              name: 'lower',
              type: 'bytes32',
              internalType: 'bytes32',
            },
            {
              name: 'upper',
              type: 'bytes32',
              internalType: 'bytes32',
            },
          ],
        },
        {
          name: 'inputs',
          type: 'tuple[]',
          internalType: 'struct Validator.Token[]',
          components: [
            {
              name: 'tokenType',
              type: 'uint8',
              internalType: 'enum Validator.Type',
            },
            {
              name: 'tokenAddress',
              type: 'tuple',
              internalType: 'struct bytes64',
              components: [
                {
                  name: 'lower',
                  type: 'bytes32',
                  internalType: 'bytes32',
                },
                {
                  name: 'upper',
                  type: 'bytes32',
                  internalType: 'bytes32',
                },
              ],
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          name: 'outputs',
          type: 'tuple[]',
          internalType: 'struct Validator.Token[]',
          components: [
            {
              name: 'tokenType',
              type: 'uint8',
              internalType: 'enum Validator.Type',
            },
            {
              name: 'tokenAddress',
              type: 'tuple',
              internalType: 'struct bytes64',
              components: [
                {
                  name: 'lower',
                  type: 'bytes32',
                  internalType: 'bytes32',
                },
                {
                  name: 'upper',
                  type: 'bytes32',
                  internalType: 'bytes32',
                },
              ],
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          name: 'sourceChainSelector',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'destinationChainSelector',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'sponsored',
          type: 'bool',
          internalType: 'bool',
        },
        {
          name: 'primaryFillerDeadline',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'deadline',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'callRecipient',
          type: 'tuple',
          internalType: 'struct bytes64',
          components: [
            {
              name: 'lower',
              type: 'bytes32',
              internalType: 'bytes32',
            },
            {
              name: 'upper',
              type: 'bytes32',
              internalType: 'bytes32',
            },
          ],
        },
        {
          name: 'callData',
          type: 'bytes',
          internalType: 'bytes',
        },
      ],
    },
    {
      name: 'confirmations',
      type: 'uint16',
      indexed: false,
      internalType: 'uint16',
    },
  ],
  anonymous: false,
} as const;

export const abi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_router',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'DOMAIN_SEPARATOR',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'EIP712_DOMAIN_TYPEHASH',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ORDER_TYPEHASH',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'TOKEN_TYPEHASH',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'acceptOwnership',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'createOrder',
    inputs: [
      {
        name: 'request',
        type: 'tuple',
        internalType: 'struct OrderHub.OrderRequest',
        components: [
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'nonce',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'order',
            type: 'tuple',
            internalType: 'struct Validator.Order',
            components: [
              {
                name: 'user',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'filler',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'inputs',
                type: 'tuple[]',
                internalType: 'struct Validator.Token[]',
                components: [
                  {
                    name: 'tokenType',
                    type: 'uint8',
                    internalType: 'enum Validator.Type',
                  },
                  {
                    name: 'tokenAddress',
                    type: 'tuple',
                    internalType: 'struct bytes64',
                    components: [
                      {
                        name: 'lower',
                        type: 'bytes32',
                        internalType: 'bytes32',
                      },
                      {
                        name: 'upper',
                        type: 'bytes32',
                        internalType: 'bytes32',
                      },
                    ],
                  },
                  {
                    name: 'tokenId',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'amount',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'outputs',
                type: 'tuple[]',
                internalType: 'struct Validator.Token[]',
                components: [
                  {
                    name: 'tokenType',
                    type: 'uint8',
                    internalType: 'enum Validator.Type',
                  },
                  {
                    name: 'tokenAddress',
                    type: 'tuple',
                    internalType: 'struct bytes64',
                    components: [
                      {
                        name: 'lower',
                        type: 'bytes32',
                        internalType: 'bytes32',
                      },
                      {
                        name: 'upper',
                        type: 'bytes32',
                        internalType: 'bytes32',
                      },
                    ],
                  },
                  {
                    name: 'tokenId',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'amount',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'sourceChainSelector',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'destinationChainSelector',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'sponsored',
                type: 'bool',
                internalType: 'bool',
              },
              {
                name: 'primaryFillerDeadline',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'deadline',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'callRecipient',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'callData',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
          },
        ],
      },
      {
        name: 'permits',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
      {
        name: 'signature',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'confirmations',
        type: 'uint16',
        internalType: 'uint16',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'executors',
    inputs: [
      {
        name: 'chain',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'executor',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getOrderId',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct Validator.Order',
        components: [
          {
            name: 'user',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'filler',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'inputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'outputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'sourceChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'destinationChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sponsored',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'primaryFillerDeadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'callRecipient',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getPeer',
    inputs: [
      {
        name: 'chainSelector',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct bytes64',
        components: [
          {
            name: 'lower',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'upper',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'hashOrder',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct Validator.Order',
        components: [
          {
            name: 'user',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'filler',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'inputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'outputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'sourceChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'destinationChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sponsored',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'primaryFillerDeadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'callRecipient',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'maxOrderDeadline',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'nonce',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'onERC1155BatchReceived',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'ids',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'values',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'onERC1155Received',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'id',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'onERC721Received',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'orders',
    inputs: [
      {
        name: 'orderId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'status',
        type: 'uint8',
        internalType: 'enum Validator.Status',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'peers',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'lower',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'upper',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'pendingOwner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'receiveMessage',
    inputs: [
      {
        name: 'dispatcher',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'message',
        type: 'tuple',
        internalType: 'struct iLayerMessage',
        components: [
          {
            name: 'blockNumber',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'blockConfirmations',
            type: 'uint16',
            internalType: 'uint16',
          },
          {
            name: 'sourceChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sender',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'destinationChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'receiver',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'hashedData',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
      {
        name: 'messageData',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'extraData',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'renounceOwnership',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'requestNonces',
    inputs: [
      {
        name: 'user',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'used',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'setExecutor',
    inputs: [
      {
        name: 'chain',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'executor',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setMaxOrderDeadline',
    inputs: [
      {
        name: 'newMaxOrderDeadline',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTimeBuffer',
    inputs: [
      {
        name: 'newTimeBuffer',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'timeBuffer',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'transferOwnership',
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'validateOrder',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct Validator.Order',
        components: [
          {
            name: 'user',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'filler',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'inputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'outputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'sourceChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'destinationChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sponsored',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'primaryFillerDeadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'callRecipient',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'signature',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdrawOrder',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct Validator.Order',
        components: [
          {
            name: 'user',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'filler',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'inputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'outputs',
            type: 'tuple[]',
            internalType: 'struct Validator.Token[]',
            components: [
              {
                name: 'tokenType',
                type: 'uint8',
                internalType: 'enum Validator.Type',
              },
              {
                name: 'tokenAddress',
                type: 'tuple',
                internalType: 'struct bytes64',
                components: [
                  {
                    name: 'lower',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                  {
                    name: 'upper',
                    type: 'bytes32',
                    internalType: 'bytes32',
                  },
                ],
              },
              {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'sourceChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'destinationChainSelector',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sponsored',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'primaryFillerDeadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'callRecipient',
            type: 'tuple',
            internalType: 'struct bytes64',
            components: [
              {
                name: 'lower',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'upper',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'orderNonce',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'ERC1155BatchReceived',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'ids',
        type: 'uint256[]',
        indexed: false,
        internalType: 'uint256[]',
      },
      {
        name: 'values',
        type: 'uint256[]',
        indexed: false,
        internalType: 'uint256[]',
      },
      {
        name: 'data',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ERC1155Received',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'id',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ERC721Received',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ExecutorUpdated',
    inputs: [
      {
        name: 'chainId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'oldExecutor',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newExecutor',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'MaxOrderDeadlineUpdated',
    inputs: [
      {
        name: 'oldDeadline',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'newDeadline',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  orderCreatedEventAbi,
  {
    type: 'event',
    name: 'OrderFilled',
    inputs: [
      {
        name: 'orderId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OrderWithdrawn',
    inputs: [
      {
        name: 'orderId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'caller',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferStarted',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TimeBufferUpdated',
    inputs: [
      {
        name: 'oldTimeBufferVal',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'newTimeBufferVal',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'InvalidDeadline',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidOrderInputApprovals',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidOrderSignature',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidPeer',
    inputs: [
      {
        name: 'chainSelector',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidRouter',
    inputs: [
      {
        name: 'router',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidSender',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidSourceChain',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidUser',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderCannotBeFilled',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderCannotBeSettled',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderCannotBeWithdrawn',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderDeadlinesMismatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OrderPrimaryFillerExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'PermitFailure',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'RequestExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'RequestNonceReused',
    inputs: [],
  },
  {
    type: 'error',
    name: 'RouterAddressCannotBeZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SafeERC20FailedOperation',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'Unauthorized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'UnprocessableOrder',
    inputs: [],
  },
  {
    type: 'error',
    name: 'UnsupportedTransfer',
    inputs: [],
  },
] as const;
