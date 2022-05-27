const fetchPOAPBalance = async (poapContract, address) => {
    try {
        const balance = await poapContract.methods.balanceOf(address).call();
        return parseInt(balance)
    } catch (e) {
        return 0
    }
}

export default fetchPOAPBalance