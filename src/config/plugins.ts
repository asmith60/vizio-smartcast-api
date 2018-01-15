import { PluginRegistrationObject } from 'hapi';
import Environment from './Environment';

const env: Environment = new Environment();
export default function get(): PluginRegistrationObject<any>[] {
  return [{
    register: require('inert')
  }, {
    register: require('vision')
  }, {
    register: require('hapi-swagger'),
    options: {
      info: {
        title: 'Vizio Smartcast API Documentation',
        description: 'API to control Vizio Smartcast',
        version: '1.0.0'
      },
      schemes: [env.protocol]
    }
  }, {
    register: require('hapi-auth-bearer-token')
  }];
}
