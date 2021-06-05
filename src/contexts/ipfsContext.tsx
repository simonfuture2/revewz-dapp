import React, { useContext, useState } from "react";
import IPFS from "ipfs-core";

export const IPFS_NODE = null;

const IPFSContext = React.createContext<any>(IPFS);

export function useIpfsContext() {
  return useContext(IPFSContext);
}

export function IPFSProvider({ children }: any) {
  const [ipfs, setIpfs] = useState(IPFS);

  async function createNode() {
    return await ipfs.create();
  }
  return (
    <IPFSContext.Provider value={createNode}>{children}</IPFSContext.Provider>
  );
}
