
import { parseJSON, format } from 'date-fns'


const FORMATS = {
  DATETIME_FILE: 'dd MMM - HHmm',
  DATETIME: 'dd MMM yyyy - HH:mm',
  DATE: 'dd MMM yyyy',
}


export function parseTimestamp(ts) {
  if (!ts) {
    return null
  }
  return parseJSON(ts)
}


export function parseDate(date) {
  if (!date) {
    return null
  }
  return new Date(date.year, date.month - 1, date.day)
}


export function serializeDate(date) {
  if (!date) {
    return null
  }
  return {
    day: date.getDate(),
    month: date.getUTCMonth() + 1,
    year: date.getUTCFullYear(),
  }
}


export function formatDate(fmtname, dt) {
  if (!dt) {
    return ''
  }
  return format(dt, FORMATS[fmtname])
}
