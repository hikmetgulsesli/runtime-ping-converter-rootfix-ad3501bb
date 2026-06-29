import { saveRuntimePingRecord } from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';
import { runtimePingConverterRootfixRepo } from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.repo';

type RuntimePingDispatch = Parameters<typeof saveRuntimePingRecord>[0];

export function actRetryLoad(dispatch: RuntimePingDispatch) {
  return () => {
    dispatch({ type: 'retry' });
    dispatch({ type: 'load', records: runtimePingConverterRootfixRepo.load() });
  };
}
