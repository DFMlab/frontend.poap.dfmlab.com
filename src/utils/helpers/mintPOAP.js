const mintPOAP = async (poapContract, uri) => {
    try {
        await poapContract.methods.safeMint('uri').call();
    } catch (e) { console.log(e) }
}

export default mintPOAP