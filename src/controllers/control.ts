import { RouteAdditionalConfigurationOptions, RouteHandler, Request, ReplyNoContinue } from 'Hapi';
import Environment from '../config/Environment';
import * as smartcast from 'vizio-smart-cast';
import * as wol from 'wol';
import * as boom from 'boom';

export function powerOn(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Power on TV',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await new Promise((resolve, reject) => {
          wol.wake(env.vizioMacAddress, (err, res) => {
            if (err) {
              reject(err);
            }

            resolve();
          });
        });
      } catch (e) {
        console.error('WoL failed:', e);
        return reply(boom.badRequest(e));
      }

      try {
        await tv.control.power.on();
      } catch (e) {
        console.error('Power on failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function powerOff(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Power off TV',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.power.off();
      } catch (e) {
        console.error('Power off failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function mediaPlay(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Play media',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.media.play();
      } catch (e) {
        console.error('Media play failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function mediaPause(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Pause media',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.media.pause();
      } catch (e) {
        console.error('Media pause failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}
