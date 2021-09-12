import moment from 'moment'

export const format = (time:String) => moment(time).format('YYYY-MM-DD')