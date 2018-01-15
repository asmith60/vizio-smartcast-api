import { ServerConnectionInfo } from 'hapi';
import * as dotenv from 'dotenv';

export default class Environment {
  host: string;
  port: number;
  protocol: ServerConnectionInfo['protocol'];
  vizioIpAddress: string | undefined;
  vizioMacAddress: string | undefined;
  vizioAuthToken: string | undefined;

  constructor(envFile: boolean = true) {
    if (envFile) {
      dotenv.config();
    }
    this.host = process.env.HOST || '0.0.0.0';
    this.port = parseInt(process.env.PORT!, 10) || 8000;
    this.protocol = <ServerConnectionInfo['protocol']>process.env.PROTOCOL || 'http';
    if (['http', 'https', 'socket'].indexOf(this.protocol) < 0) {
      throw new Error(`Unsupported protocol "${this.protocol}"`);
    }
    this.vizioIpAddress = process.env.VIZIO_IP_ADDRESS || undefined;
    this.vizioMacAddress = process.env.VIZIO_MAC_ADDRESS || undefined;
    this.vizioAuthToken = process.env.VIZIO_AUTH_TOKEN || undefined;
    if (!this.vizioIpAddress || !this.vizioMacAddress || !this.vizioAuthToken) {
      throw new Error('Vizio IP address, MAC address, and authentication token must be provided');
    }
  }
}
