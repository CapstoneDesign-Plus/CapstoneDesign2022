declare type NodeEnvironment = 'production' | 'test' | 'development';
interface Environment {
    NODE_ENV: NodeEnvironment;
    DB_URL: string;
    HOST: string;
    PORT: number;
    SESSION_SECRET: string;
    CRYPTO_KEY: string;
    CRYPTO_IV: number;
    TEST_ACCOUNT_EMAIL: string;
    TEST_ACCOUNT_PASSWORD: string;
    ROOT_PATH: string;
}
declare const env: Environment;
export default env;
