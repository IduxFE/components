import { Dayjs } from 'dayjs'
import { toNumber } from 'lodash'
import { SelectType, TimeOption } from './types'

export function normalizeAmPm(hour: number, is12Hours = false, capital = false): string {
  if (!is12Hours) {
    return ''
  }
  const str = hour >= 12 ? 'pm' : 'am'
  return capital ? str.toUpperCase() : str
}

export function generateOptions(
  total = 60,
  step = 1,
  disabledOptions: number[] = [],
  hideDisabledOptions = false,
): TimeOption[] {
  const options: TimeOption[] = []
  for (let i = 0; i < total; i += step) {
    const isDisabled = disabledOptions.includes(i)
    if (!isDisabled || !hideDisabledOptions) {
      options.push({
        value: i,
        disabled: isDisabled,
      })
    }
  }
  return options
}

export function generateAmpmOptions(
  disabledOption: string,
  amPmCapital = false,
  hideDisabledOptions = false,
): TimeOption[] {
  disabledOption = disabledOption.toLowerCase()
  return [
    {
      value: 'am',
      disabled: disabledOption === 'am',
    },
    {
      value: 'pm',
      disabled: disabledOption === 'pm',
    },
  ]
    .map(item => ({
      ...item,
      value: amPmCapital ? item.value.toUpperCase() : item.value,
    }))
    .filter(item => !hideDisabledOptions || !item.disabled)
}

export function generateHourOptions(
  is12Hours: boolean,
  step = 1,
  disabledOptions: number[] = [],
  hideDisabledOptions = false,
): TimeOption[] {
  const options = generateOptions(is12Hours ? 12 : 24, step, disabledOptions, hideDisabledOptions)
  if (is12Hours) {
    // if is12Hours, there is no 0, it should be 12 am or 12 pm
    const zeroOpt = options.find(opt => opt.value === 0)
    zeroOpt && (zeroOpt.value = 12)
  }

  return options
}

export function getHourToShow(hour: number, is12Hours: boolean): number {
  if (is12Hours) {
    hour > 12 && (hour -= 12)

    // if is12Hours, there is no 0, it should be 12 am or 12 pm
    hour === 0 && (hour = 12)
  }
  return hour
}

export function getHourValue(hour: number, is12Hours: boolean, ampm: string): number {
  if (is12Hours) {
    ampm = ampm.toLowerCase()
    if (ampm === 'am' && hour >= 12) {
      hour -= 12
    }
    if (ampm === 'pm' && hour < 12) {
      hour += 12
    }
  }

  return hour
}

export function getDateAfterSelect(
  dateNow: Dayjs,
  selectType: SelectType,
  is12Hours: boolean,
  selectVal: number | string,
): Dayjs {
  const selectNumber = toNumber(selectVal)

  if (selectType === 'ampm') {
    const hour = getHourValue(dateNow.hour(), is12Hours, selectVal.toString())
    dateNow = dateNow.hour(hour)
  }

  if (selectType === 'hour') {
    const ampm = normalizeAmPm(dateNow.hour(), is12Hours, false)
    dateNow = dateNow.hour(getHourValue(selectNumber, is12Hours, ampm))
  }

  if (selectType === 'minute') {
    dateNow = dateNow.minute(selectNumber)
  }

  if (selectType === 'second') {
    dateNow = dateNow.second(selectNumber)
  }

  return dateNow.millisecond(0)
}
