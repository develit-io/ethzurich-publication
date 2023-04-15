import { ethers } from 'ethers'
import moment from 'moment'

export function shortenAddress(address: string): string {
  if (!ethers.utils.isAddress(address))
    return ''
  return `${address.slice(0, 10)}...${address.slice(38, 81)}`
}

export function shortenAddressXS(address: string): string {
  if (!ethers.utils.isAddress(address))
    return ''
  return `${address.slice(0, 3)}...${address.slice(38, 81)}`
}

export function formatDate(date: Date, format = 'DD.MM.yyyy') {
  return moment(date).format(format)
}

export function remainingTime(endDate: Date) {
  if (!endDate)
    return ''
  const formattedNumber = (n: number) => n.toString().padStart(2, '0')

  let result = ''

  const now = new Date()
  let time = (+endDate - +now) / 1000
  const days: number = Math.floor(time / 86400)
  time = time - days * 86400
  const hrs: number = Math.floor(time / 3600)
  time = time - hrs * 3600
  const minutes: number = Math.floor(time / 60)
  time = time - minutes * 60
  if (time < 0 || days < 0 || hrs < 0 || minutes < 0)
    return '00:00:00:00'

  result = `${formattedNumber(days)}:${formattedNumber(hrs)}:${formattedNumber(minutes)}`

  return result
}
