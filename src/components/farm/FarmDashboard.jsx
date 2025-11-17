import { motion } from 'framer-motion'
import FarmPool from './FarmPool'

const FARM_POOLS = [
  {
    id: 'leaf',
    name: 'LEAF/TEA',
    lpToken: '0x62D09584B13c777edF5cCd96961da5Bb4B5Bf0a9',
    farmContract: '0x2e3dA8CaD6BE0E61C001095Ae7778C0f266c877f',
    token0: '🍃',
    token1: '🍵',
    // Optional: Uncomment to use image URLs instead of emoji
    // token0Icon: '/images/leaf-icon.png',
    // token1Icon: '/images/tea-icon.png',
    badge: 'TEA',
  },
  {
    id: 'daun',
    name: 'DAUN/TEA',
    lpToken: '0x47fEC3B94aB55f194FD535D1f76dbD2A2F9f2380',
    farmContract: '0x314B34844f9FbbFdF434678F0C882ad0c27522C6',
    token0: '🌿',
    token1: '🍵',
    // Optional: Uncomment to use image URLs instead of emoji
    // token0Icon: '/images/daun-icon.png',
    // token1Icon: '/images/tea-icon.png',
    badge: 'TEA',
  },
  {
    id: 'hrbl',
    name: 'HRBL/TEA',
    lpToken: '0x05222177019a2988039adB7a77B5D3538F8a442C',
    farmContract: '0xF610208477dDF3B5aC1d3dCF95515aad60447ab1',
    token0: '🌱',
    token1: '🍵',
    // Optional: Uncomment to use image URLs instead of emoji
    // token0Icon: '/images/hrbl-icon.png',
    // token1Icon: '/images/tea-icon.png',
    badge: 'TEA',
  },
]

export default function FarmDashboard() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Leaf Farm
        </h1>
        <p className="text-slate-400 text-lg">
          Liquidity Pools & Farms
        </p>
      </motion.div>

      {/* Farm Pools List */}
      <div className="space-y-4">
        {FARM_POOLS.map((pool, index) => (
          <motion.div
            key={pool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <FarmPool pool={pool} defaultExpanded={index === 0} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
