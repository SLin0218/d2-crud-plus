import { daterangeFormatter, datetimerangeFormatter, shortcuts } from '../functions'

export default {
  datetime: {
    form: { component: { name: 'el-date-picker', props: { type: 'datetime', 'value-format': 'yyyy-MM-dd HH:mm:ss' } } },
    component: { name: 'date-format' }
  },
  date: {
    form: { component: { name: 'el-date-picker', props: { type: 'date', 'value-format': 'YYYY-MM-DD' } } },
    component: { name: 'date-format', props: { format: 'YYYY-MM-DD' } }
  },
  daterange: {
    form: {
      component: {
        name: 'el-date-picker',
        props: {
          type: 'daterange',
          'range-separator': '至',
          'start-placeholder': '开始',
          'end-placeholder': '结束',
          'picker-options': { shortcuts: shortcuts },
          'value-format': 'YYYY-MM-DD'
        }
      }
    },
    formatter: daterangeFormatter
  },
  datetimerange: {
    form: {
      component: {
        name: 'el-date-picker',
        props: {
          type: 'datetimerange',
          'range-separator': '至',
          'start-placeholder': '开始',
          'end-placeholder': '结束',
          'picker-options': { shortcuts: shortcuts },
          'value-format': 'YYYY-MM-DD HH:mm:ss'
        }
      }
    },
    formatter: datetimerangeFormatter
  },
  time: {
    form: { component: { name: 'el-time-picker', props: { 'value-format': 'HH:mm:ss' } } },
    component: { name: 'date-format', props: { format: 'HH:mm:ss' } }
  }
}
