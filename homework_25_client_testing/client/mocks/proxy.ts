import MockAdapter from 'axios-mock-adapter';
import { proxy } from '../src/api/proxy';

export const mock = new MockAdapter(proxy);
