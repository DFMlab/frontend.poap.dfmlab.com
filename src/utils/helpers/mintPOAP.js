import swal from 'sweetalert';

const mintPOAP = async (performActions, poapContract, uri) => {
    try {
        await performActions(async (kit) => {
            const { defaultAccount } = kit;
            await poapContract.methods.safeMint(uri).send({ from: defaultAccount });
            swal("Good job!", "The POAP has been minted to your wallet!", "success");
        })
    } catch (e) {
        console.log(e)
        swal("Oh no!", "We encountered an error while minting the POAP!", "error");
    }
}

export default mintPOAP