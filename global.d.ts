namespace NodeJS {
  interface ProcessEnv {
    MVC_PORT: number;
  }
}

declare module "*.css" {
  const keys: { [key: string]: string };
  export default keys;
}
