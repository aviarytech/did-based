# The did:based method

The did:based method is a static [Decentralized Identifier (DID)](https://www.w3.org/TR/did-core/) method that is simple and embeds the entire DID document into the identifier.

## Create

A conformant DID document is created (for example [did:key](https://w3c-ccg.github.io/did-method-key/)) and JSON stringified. This string is base64url encoded and added onto the prefix `did:based:`.

```
`did:based:${Buffer.from(JSON.stringify(didDocument)).toString('base64url')}`
```

## Read

The `did:based:` prefix is dropped and the resulting string is base64url decoded to a utf-8 string. The resulting string is JSON parsed.

```
JSON.parse(Buffer.from(did.split(':')[2], 'base64url').toString('utf-8'));
```


## Update

This DID method is static and DIDs can not be updated.

## Deactivate

This DID method is static and DIDs can not be deactivated.
