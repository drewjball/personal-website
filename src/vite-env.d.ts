/// <reference types="vite/client" />

declare module "*.pdf" {
  const content: string
  export default content
}

declare module "*.webp" {
  const value: string
  export default value
}
