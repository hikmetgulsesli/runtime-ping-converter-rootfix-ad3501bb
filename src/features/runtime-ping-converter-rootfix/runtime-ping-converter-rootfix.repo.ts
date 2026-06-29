export type RuntimePingStatus = 'idle' | 'running' | 'paused' | 'resolved';

export interface RuntimePingRecord {
  id: string;
  title: string;
  ping: number;
  status: RuntimePingStatus;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'runtime-ping-converter-rootfix/records';

export function createDefaultRuntimePingRecord(
  overrides: Partial<RuntimePingRecord> = {},
): RuntimePingRecord {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    title: 'New Runtime Ping',
    ping: 0,
    status: 'idle',
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

export const runtimePingConverterRootfixRepo = {
  load(): RuntimePingRecord[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) return [];
      return parsed as RuntimePingRecord[];
    } catch {
      return [];
    }
  },

  save(records: RuntimePingRecord[]): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch {
      // Storage may be unavailable in restricted environments.
    }
  },

  clear(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore.
    }
  },
};
