import { RouteConfiguration } from 'hapi';
import * as Control from '../controllers/control';

export default function get(): RouteConfiguration[] {
  return [{
    method: 'POST',
    path: '/control/power/on',
    config: Control.powerOn()
  }, {
    method: 'POST',
    path: '/control/power/off',
    config: Control.powerOff()
  }];
}
