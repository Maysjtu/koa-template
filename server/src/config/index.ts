import requireDirectory from 'require-directory';

const defaultConfig = 'local';
console.log("NODE_ENV",process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV || defaultConfig;
const envName = NODE_ENV.toLowerCase().trim();

let config :any;
let configs = requireDirectory(module);
config = configs[envName] || configs[defaultConfig];

export default config;
