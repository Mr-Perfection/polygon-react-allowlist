interface ImportMetaEnv {
  readonly REACT_APP_FAUNADB_SECRET: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}