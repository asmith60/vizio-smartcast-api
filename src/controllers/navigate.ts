import { RouteAdditionalConfigurationOptions, RouteHandler, Request, ReplyNoContinue } from 'Hapi';
import Environment from '../config/Environment';
import * as smartcast from 'vizio-smart-cast';
import * as boom from 'boom';

export function up(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate up',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.up();
      } catch (e) {
        console.error('Navigate up failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function down(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate down',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.down();
      } catch (e) {
        console.error('Navigate down failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function left(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate left',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.left();
      } catch (e) {
        console.error('Navigate left failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function right(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate right',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.right();
      } catch (e) {
        console.error('Navigate right failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function ok(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate ok',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.ok();
      } catch (e) {
        console.error('Navigate ok failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function back(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate back',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.back();
      } catch (e) {
        console.error('Navigate back failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}

export function exit(): RouteAdditionalConfigurationOptions {
  return {
    description: 'Navigate exit',
    tags: ['api'],
    handler: async <RouteHandler>(request: Request, reply: ReplyNoContinue) => {
      const env: Environment = new Environment();

      const tv = new smartcast(env.vizioIpAddress!, env.vizioAuthToken);

      try {
        await tv.control.navigate.exit();
      } catch (e) {
        console.error('Navigate exit failed:', e);
        return reply(boom.badRequest(e));
      }

      return reply();
    }
  };
}
