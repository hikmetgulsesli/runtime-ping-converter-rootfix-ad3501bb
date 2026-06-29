import type { RuntimePingRecord } from '../features/runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.repo';

export const runtimePingConverterRootfixFixture: RuntimePingRecord[] = [
  {
    id: 'rpc-001',
    title: 'Initial sync probe',
    ping: 42,
    status: 'resolved',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
  },
  {
    id: 'rpc-002',
    title: 'Hourly heartbeat',
    ping: 128,
    status: 'running',
    createdAt: '2024-01-03T00:00:00.000Z',
    updatedAt: '2024-01-03T12:00:00.000Z',
  },
  {
    id: 'rpc-003',
    title: 'Latency spike capture',
    ping: 512,
    status: 'paused',
    createdAt: '2024-01-04T00:00:00.000Z',
    updatedAt: '2024-01-04T06:00:00.000Z',
  },
];
