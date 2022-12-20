import { ethers } from 'ethers'

import { Allowlist } from '../../../backend/typechain-types/Allowlist'
import AllowlistContract from '../../../backend/artifacts/contracts/Allowlist.sol/Allowlist.json'

export default function getAllowlistContract(
  contractAddress: string
): Allowlist {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(
    contractAddress,
    AllowlistContract.abi,
    signer
  )
  return contract as Allowlist
}