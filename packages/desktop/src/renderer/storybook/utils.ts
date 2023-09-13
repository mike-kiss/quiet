import { DisplayableMessage } from '@quiet/types'

export const mock_messages = (message: DisplayableMessage | null = null) => {
  let placeholder: DisplayableMessage = {
    id: '32',
    type: 1,
    media: undefined,
    message: '*heavy breathing*',
    createdAt: 0,
    date: '12:46',
    nickname: 'vader',
    isRegistered: true,
    isDuplicated: false,
    pubKey: 'pubKey'
  }

  if (message !== null) {
    placeholder = message
  }

  const messages: {
    count: number
    groups: { [day: string]: DisplayableMessage[][] }
  } = {
    count: 32,
    groups: {
      '26 Oct': [
        [
          {
            id: '1',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '2',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '3',
            type: 1,
            message: 'Of course, I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '4',
            type: 1,
            message: 'Wrough!',
            createdAt: 0,
            date: '12:46',
            nickname: 'wookie',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '5',
            type: 1,
            message: 'Yeah!',
            createdAt: 0,
            date: '12:46',
            nickname: 'leah',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '6',
            type: 1,
            message: 'The more messages the better',
            createdAt: 0,
            date: '12:46',
            nickname: 'luke',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '7',
            type: 1,
            message: 'We cannot grant you the rank of messager',
            createdAt: 0,
            date: '12:46',
            nickname: 'windoo',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '8',
            type: 1,
            message:
              'deathhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhstarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdeathstartttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
      ],
      '27 Oct': [
        [
          {
            id: '9',
            type: 1,
            message: 'Luck, I am your father!',
            createdAt: 0,
            date: '12:40',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '10',
            type: 1,
            message: "That's impossible!",
            createdAt: 0,
            date: '12:41',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '11',
            type: 1,
            message: 'Nooo!',
            createdAt: 0,
            date: '12:45',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '12',
            type: 1,
            message: 'Uhuhu!',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '13',
            type: 1,
            message: 'Why?',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '14',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '15',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '16',
            type: 1,
            message: 'Of course, I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '17',
            type: 1,
            message: 'Wrough!',
            createdAt: 0,
            date: '12:46',
            nickname: 'wookie',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '18',
            type: 1,
            message: 'Yeah!',
            createdAt: 0,
            date: '12:46',
            nickname: 'leah',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '19',
            type: 1,
            message: 'The more messages the better',
            createdAt: 0,
            date: '12:46',
            nickname: 'luke',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '20',
            type: 1,
            message: 'We cannot grant you the rank of messager',
            createdAt: 0,
            date: '12:46',
            nickname: 'windoo',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '21',
            type: 1,
            message:
              'deathhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhstarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdeathstartttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
      ],
      '28 Oct': [
        [
          {
            id: '22',
            type: 1,
            message: 'Hello',
            createdAt: 0,
            date: '28 Oct, 10:00',
            nickname: 'alice',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '23',
            type: 1,
            message:
              "How are you? My day was awesome. I removed a lot of unused props from container and I simplified code a lot. I like coding, coding is like building things with LEGO. I could admit it's a little bit harder and there's a lot that can go wrong but I like it anyway.",
            createdAt: 0,
            date: '28 Oct, 10:01',
            nickname: 'alice',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '24',
            type: 1,
            message: 'Great, thanks!',
            createdAt: 0,
            date: '28 Oct, 10:02',
            nickname: 'john',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
      ],
      Today: [
        [
          {
            id: '25',
            type: 1,
            message: 'Luck, I am your father!',
            createdAt: 0,
            date: '12:40',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '26',
            type: 1,
            message: "That's impossible!",
            createdAt: 0,
            date: '12:41',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
          {
            id: '27',
            type: 1,
            message: 'Nooo!',
            createdAt: 0,
            date: '12:45',
            nickname: 'chad',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '28',
            type: 1,
            message: 'Uhuhu!',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '29',
            type: 1,
            message: 'Why?',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '30',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [
          {
            id: '31',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
        [placeholder],
        [
          {
            id: '33',
            type: 1,
            message: 'Use the force, look!',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader',
            isRegistered: true,
            isDuplicated: false,
            pubKey: 'pubKey'
          },
        ],
      ],
    },
  }

  return messages
}
