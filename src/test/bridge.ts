import { runtimePingConverterRootfixFixture } from '../__fixtures__/runtime-ping-converter-rootfix.fixture';
import {
  runtimePingConverterRootfixRepo,
  type RuntimePingRecord,
} from '../features/runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.repo';

export function resetRuntimePingConverterRootfixState(): void {
  runtimePingConverterRootfixRepo.clear();
}

export function seedRuntimePingConverterRootfixFixture(): RuntimePingRecord[] {
  runtimePingConverterRootfixRepo.save(runtimePingConverterRootfixFixture);
  return runtimePingConverterRootfixFixture;
}

export function readRuntimePingConverterRootfixRecords(): RuntimePingRecord[] {
  return runtimePingConverterRootfixRepo.load();
}
