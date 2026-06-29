import {
  saveRuntimePingRecord,
  setRuntimePingView,
} from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';

type RuntimePingDispatch = Parameters<typeof saveRuntimePingRecord>[0];

export function actCreateRecord(dispatch: RuntimePingDispatch) {
  return () => {
    dispatch({ type: 'select', id: null });
    dispatch(setRuntimePingView('editor'));
  };
}
