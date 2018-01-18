import { RouteConfiguration } from 'hapi';
import * as Control from '../controllers/control';
import * as Navigate from '../controllers/navigate';
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
    path: '/control/navigate/up',
    config: Navigate.up()
  }, {
    method: 'POST',
    path: '/control/navigate/down',
    config: Navigate.down()
  }, {
    method: 'POST',
    path: '/control/navigate/left',
    config: Navigate.left()
  }, {
    method: 'POST',
    path: '/control/navigate/right',
    config: Navigate.right()
  }, {
    method: 'POST',
    path: '/control/navigate/ok',
    config: Navigate.ok()
  }, {
    method: 'POST',
    path: '/control/navigate/back',
    config: Navigate.back()
  }, {
    method: 'POST',
    path: '/control/navigate/exit',
    config: Navigate.exit()
  }, {
    method: 'POST',
    path: '/input/set/{name}',
    config: Input.set()
  }];
}
