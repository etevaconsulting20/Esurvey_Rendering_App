export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true
  },
  {
    key: 'SelectedOptions',
    types: ['object'],
    required: true
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
    key: 'hideInput',
    types: ['boolean'],
    required: false
  },
  {
    key: 'hideExtraControl',
    types: ['boolean'],
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
    key: 'trigger',
    types: ['string', 'number', 'function'],
    required: false
  },
  {
    key: 'type',
    types: ['string'],
    required: true
  },
  ,
  {
    key: 'ItemsList',
    types: ['object'],
    required: false
  }
];
