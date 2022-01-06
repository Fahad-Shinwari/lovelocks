import getWeb3, { getWeb3IfAvailable } from "./web3Utils";

export const getUserAddress = async () => {
  const web3 = await getWeb3IfAvailable();
  const accounts = await web3.eth.getAccounts();
  return accounts && accounts.length ? accounts[0] : null;
}


export default getWeb3; 