import {
  saveRuntimePingRecord,
  setRuntimePingView,
} from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';

type RuntimePingDispatch = Parameters<typeof saveRuntimePingRecord>[0];

export function actSelectRecord(dispatch: RuntimePingDispatch) {
  return (id: string) => {
    dispatch({ type: 'select', id });
    dispatch(setRuntimePingView('editor'));
  };
}
