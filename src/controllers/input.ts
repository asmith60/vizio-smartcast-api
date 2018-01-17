import { RouteAdditionalConfigurationOptions, RouteHandler, Request, ReplyNoContinue } from 'Hapi';
import Environment from '../config/Environment';
import * as smartcast from 'vizio-smart-cast';
import * as boom from 'boom';

export function set(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Set input',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      // Validate input name
      if (!request.hasOwnProperty('params') || !request.params.hasOwnProperty('name') || !request.params.name) {
        console.error('Input set failed:', 'Input name not in request');
        return reply(boom.badRequest('Input name not in request'));
      }

      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.input.set(request.params.name);
      } catch (e) {
        console.error('Input set failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}
