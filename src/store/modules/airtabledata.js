import axios from 'axios';

const state = {
  settings: {
    data:[],
    colHeaders: ['Invoice<br>Number', 'Invoice<br>Date', 'Client Name', 'Revenue<br>Type', 'Item<br>Type', 'EB/<br>NB', 'Item<br>Code', 'Account<br>Code', 'Start<br>Date', 'End<br>Date', 'Term<br>Days', 'Term<br>Months', '$ Value<br>month', 'Currency', 'Territory', 'FY', 'Total'
    ],
    columns: [
      { data: 'invoiceNumber' },
      { data: 'invoiceDate', type: 'date' },
      { data: 'clientName' },
      { data: 'revenueType' },
      { data: 'itemType' },
      { data: 'ebVnb', className: 'htCenter' },
      { data: 'itemCode' },
      { data: 'accountCode', className: 'htCenter' },
      { data: 'contractStart' },
      { data: 'contractEnd' },
      { data: 'days', className: 'htCenter' },
      { data: 'months', className: 'htCenter' },
      { data: 'valuePerMonth' },
      { data: 'currency', className: 'htCenter' },
      { data: 'territory', className: 'htCenter' },
      { data: 'finYear', className: 'htCenter' },
      {
        data: 'total', type: 'numeric',
        numericFormat: {
          pattern: '$ 0,0.00',
          culture: 'en-US'
        }
      }
    ],
    rowHeaders: [],
    columnSorting: true,
    manualColumnResize: true,
    manualRowResize: true,
    dropdownMenu: true,
    filters: true,
    colWidths: [70, 97, 395, 155, 88, 41, 97, 60, 79, 78, 42, 49, 94, 56, 55, 41, 88]
  }
}

const getters = {
  airtableData: state => state.settings.data
}

const actions = {
  async fetchAirtableData({ commit }) {
    const response = await axios.get('https://api.airtable.com/v0/appes0AhRWhnBvazS/Revenue%20Data?api_key=keyjtlRAZz7fn2hyK')

    commit('airtableData', response.data.records)
  }
}

const mutations = {
  airtableData: (state, airtableData) => (state.settings.data = airtableData)
}

export default {  
  state,
  getters,
  actions,
  mutations
}
