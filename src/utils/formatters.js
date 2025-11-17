import { formatEther } from 'viem'

/**
 * Format balance with smart decimals
 * - If whole number: show without decimals (1000 → "1000")
 * - If has decimals: show up to 4 decimals, remove trailing zeros (1000.5 → "1000.5", 1000.1234 → "1000.1234")
 */
export function formatBalance(value, maxDecimals = 4) {
  if (!value) return '0'
  
  try {
    const formatted = formatEther(value)
    const num = parseFloat(formatted)
    
    if (num === 0) return '0'
    if (num < 0.0001) return '< 0.0001'
    
    // Check if it's a whole number
    if (Number.isInteger(num)) {
      return num.toString()
    }
    
    // Has decimals - format with max decimals and remove trailing zeros
    const fixed = num.toFixed(maxDecimals)
    // Remove trailing zeros and decimal point if not needed
    return parseFloat(fixed).toString()
  } catch (error) {
    console.error('Error formatting balance:', error)
    return '0'
  }
}

/**
 * Format reward with smart decimals (up to 4 decimals, same as balance)
 */
export function formatReward(value) {
  if (!value) return '0'
  
  try {
    const formatted = formatEther(value)
    const num = parseFloat(formatted)
    
    if (num === 0) return '0'
    if (num < 0.0001) return '< 0.0001'
    
    // Check if it's a whole number
    if (Number.isInteger(num)) {
      return num.toString()
    }
    
    // Has decimals - format with max 4 decimals and remove trailing zeros
    const fixed = num.toFixed(4)
    return parseFloat(fixed).toString()
  } catch (error) {
    console.error('Error formatting reward:', error)
    return '0'
  }
}

/**
 * Format TVL with proper large number handling
 */
export function formatTVL(value) {
  if (!value) return '0'
  
  try {
    const formatted = formatEther(value)
    const num = parseFloat(formatted)
    
    console.log('🔢 TVL Formatting:', {
      raw: value.toString(),
      formatted,
      number: num
    })
    
    if (num === 0) return '0'
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`
    
    // For numbers less than 1000, show with comma separators
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  } catch (error) {
    console.error('Error formatting TVL:', error)
    return '0'
  }
}

/**
 * Shorten address
 */
export function shortenAddress(address) {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

/**
 * Format percentage
 */
export function formatPercent(value, decimals = 2) {
  if (!value) return '0%'
  return `${parseFloat(value).toFixed(decimals)}%`
}
