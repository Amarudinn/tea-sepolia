import { useState } from 'react'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { motion } from 'framer-motion'
import { Droplet, Loader2, ExternalLink } from 'lucide-react'
import { CONTRACTS, LEAF_FAUCET_ABI } from '../config/contracts'
import { parseEther } from 'viem'

export default function FaucetButtons() {
  const { writeContract: claimLeaf, data: claimHash } = useWriteContract()
  const { isLoading: isClaiming } = useWaitForTransactionReceipt({ hash: claimHash })

  const handleClaimLeaf = () => {
    claimLeaf({
      address: CONTRACTS.LEAF_FAUCET,
      abi: LEAF_FAUCET_ABI,
      functionName: 'claimTokens',
      value: parseEther('0.001'), // Fee amount
    })
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* TEA Faucet */}
      <motion.a
        href="https://faucet-sepolia.tea.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-secondary flex items-center gap-2"
      >
        <Droplet className="w-5 h-5" />
        TEA Faucet
        <ExternalLink className="w-4 h-4" />
      </motion.a>

      {/* LEAF Faucet */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClaimLeaf}
        disabled={isClaiming}
        className="btn-secondary flex items-center gap-2"
      >
        {isClaiming ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Droplet className="w-5 h-5" />
            LEAF Faucet
          </>
        )}
      </motion.button>
    </div>
  )
}
