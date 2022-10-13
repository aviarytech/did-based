import { IDIDDocument } from "./interfaces";

export const create = (didDocument: IDIDDocument): string => {
  return `did:based:${Buffer.from(JSON.stringify(didDocument)).toString('base64url')}`
}

export const read = (did: string): IDIDDocument => {
  try {
    return JSON.parse(Buffer.from(did.split(':')[2], 'base64url').toString('utf-8'));
  } catch (e) {
    throw new Error(`did ${did} invalid`)
  }
}
