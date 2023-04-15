import { ethers } from 'ethers'

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
