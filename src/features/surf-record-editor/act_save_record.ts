import {
  saveRuntimePingRecord,
  setRuntimePingView,
} from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';
import type { RuntimePingRecord } from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.repo';

type RuntimePingDispatch = Parameters<typeof saveRuntimePingRecord>[0];

export function actSaveRecord(
  dispatch: RuntimePingDispatch,
  id?: string,
) {
  return (
    patch?: Partial<Omit<RuntimePingRecord, 'id' | 'createdAt'>> | unknown,
  ) => {
    const cleanPatch =
      patch && typeof patch === 'object' && ('nativeEvent' in patch || 'target' in patch)
        ? undefined
        : (patch as Partial<Omit<RuntimePingRecord, 'id' | 'createdAt'>>);
    saveRuntimePingRecord(dispatch, id, cleanPatch);
    dispatch(setRuntimePingView('operations'));
  };
}
