import useContract from './useContract'

import POAPAbi from './../contracts/POAP.json'

const usePOAPContract = (contractAddress) =>  useContract(POAPAbi, contractAddress)

export default usePOAPContract