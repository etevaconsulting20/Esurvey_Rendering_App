export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true
  },
  {
    key: 'user',
    types: ['boolean'],
    required: true
  },
  {
    key: 'hideExtraControl',
    types: ['boolean'],
    required: false
  },
  {
    key: 'trigger',
    types: ['string', 'number', 'function'],
    required: false
  },
  {
    key: 'validator',
    types: ['function'],
    required: false
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false
  },
  {
    key: 'placeholder',
    types: ['string'],
    required: false
  },
  {
    key: 'inputAttributes',
    types: ['object'],
    required: false
  },
  {
    key: 'metadata',
    types: ['object'],
    required: false
  },
  {
    key: 'ComponentType',
    types: ['string'],
    required: false
  },
  {
    key: 'SelectedOptions',
    types: ['object'],
    required: false
  },
  {
    key: 'type',
    types: ['string'],
    required: true
  },
  {
    key: 'ItemsList',
    types: ['object'],
    required: false
  }
];
