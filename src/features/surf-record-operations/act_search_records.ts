import {
  saveRuntimePingRecord,
  type RuntimePingState,
} from '../runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';

type RuntimePingDispatch = Parameters<typeof saveRuntimePingRecord>[0];

export function actSearchRecords(dispatch: RuntimePingDispatch) {
  return (query: string) => {
    dispatch({ type: 'setQuery', query });
  };
}

export function applySearchFilter(
  records: RuntimePingState['records'],
  query: RuntimePingState['query'],
): RuntimePingState['records'] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return records;
  return records.filter(
    (record) =>
      record.id.toLowerCase().includes(trimmed) ||
      record.title.toLowerCase().includes(trimmed) ||
      String(record.ping).includes(trimmed),
  );
}
