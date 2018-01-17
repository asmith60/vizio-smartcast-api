import { RouteConfiguration } from 'hapi';
import * as Control from '../controllers/control';
import * as Input from '../controllers/input';


export default function get(): RouteConfiguration[] {
  return [{
    method: 'POST',
    path: '/control/power/on',
    config: Control.powerOn()
  }, {
    method: 'POST',
    path: '/control/power/off',
    config: Control.powerOff()
  }, {
    method: 'POST',
    path: '/control/media/play',
    config: Control.mediaPlay()
  }, {
    method: 'POST',
    path: '/control/media/pause',
    config: Control.mediaPause()
  }, {
    method: 'POST',
    path: '/input/set/{name}',
    config: Input.set()
  }];
}
