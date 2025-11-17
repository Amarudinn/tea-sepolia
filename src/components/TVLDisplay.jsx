import { formatEther } from 'viem'

export default function TVLDisplay({ value, token, label = 'TVL' }) {
  if (!value) {
    return (
      <div className="text-right">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-lg font-semibold text-green-400">0.00 {token}</p>
      </div>
    )
  }

  const ethValue = formatEther(value)
  const num = parseFloat(ethValue)

  // Format based on size
  let displayValue
  if (num >= 1000000) {
    displayValue = `${(num / 1000000).toFixed(2)}M`
  } else if (num >= 1000) {
    displayValue = `${(num / 1000).toFixed(2)}K`
  } else {
    displayValue = num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="text-right">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-lg font-semibold text-green-400">
        {displayValue} {token}
      </p>
      {/* Show exact value on hover */}
      <p className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-help" title={`Exact: ${num.toFixed(8)} ${token}`}>
        {num >= 1000 ? `≈ ${num.toLocaleString('en-US', { maximumFractionDigits: 2 })}` : ''}
      </p>
    </div>
  )
}
