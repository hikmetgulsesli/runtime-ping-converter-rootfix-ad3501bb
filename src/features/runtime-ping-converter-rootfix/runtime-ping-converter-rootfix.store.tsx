import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';
import {
  runtimePingConverterRootfixRepo,
  createDefaultRuntimePingRecord,
  type RuntimePingRecord,
  type RuntimePingStatus,
} from './runtime-ping-converter-rootfix.repo';

export type RuntimePingView = 'operations' | 'board' | 'insights' | 'editor';

export interface RuntimePingState {
  records: RuntimePingRecord[];
  view: RuntimePingView;
  selectedId: string | null;
  query: string;
  statusFilter: 'all' | RuntimePingStatus;
  dateRange: '1h' | '24h' | '7d';
  error: string | null;
  loading: boolean;
}

const initialState: RuntimePingState = {
  records: [],
  view: 'operations',
  selectedId: null,
  query: '',
  statusFilter: 'all',
  dateRange: '7d',
  error: null,
  loading: false,
};

type RuntimePingAction =
  | { type: 'load'; records: RuntimePingRecord[] }
  | { type: 'add'; record: RuntimePingRecord }
  | { type: 'update'; id: string; patch: Partial<Omit<RuntimePingRecord, 'id' | 'createdAt'>> }
  | { type: 'remove'; id: string }
  | { type: 'setView'; view: RuntimePingView }
  | { type: 'select'; id: string | null }
  | { type: 'setQuery'; query: string }
  | { type: 'setStatusFilter'; statusFilter: RuntimePingState['statusFilter'] }
  | { type: 'setDateRange'; dateRange: RuntimePingState['dateRange'] }
  | { type: 'setError'; error: string | null }
  | { type: 'retry' };

function reducer(state: RuntimePingState, action: RuntimePingAction): RuntimePingState {
  switch (action.type) {
    case 'load':
      return { ...state, records: action.records, loading: false, error: null };
    case 'add':
      return { ...state, records: [action.record, ...state.records], selectedId: action.record.id };
    case 'update': {
      const now = new Date().toISOString();
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === action.id ? { ...record, ...action.patch, updatedAt: now } : record,
        ),
      };
    }
    case 'remove':
      return {
        ...state,
        records: state.records.filter((record) => record.id !== action.id),
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      };
    case 'setView':
      return { ...state, view: action.view };
    case 'select':
      return { ...state, selectedId: action.id };
    case 'setQuery':
      return { ...state, query: action.query };
    case 'setStatusFilter':
      return { ...state, statusFilter: action.statusFilter };
    case 'setDateRange':
      return { ...state, dateRange: action.dateRange };
    case 'setError':
      return { ...state, error: action.error };
    case 'retry':
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
}

interface RuntimePingContextValue {
  state: RuntimePingState;
  dispatch: React.Dispatch<RuntimePingAction>;
}

const RuntimePingContext = createContext<RuntimePingContextValue | null>(null);

export function RuntimePingConverterRootfixProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'load', records: runtimePingConverterRootfixRepo.load() });
  }, []);

  useEffect(() => {
    runtimePingConverterRootfixRepo.save(state.records);
  }, [state.records]);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <RuntimePingContext.Provider value={value}>{children}</RuntimePingContext.Provider>
  );
}

export function useRuntimePingConverterRootfix() {
  const context = useContext(RuntimePingContext);
  if (!context) {
    throw new Error(
      'useRuntimePingConverterRootfix must be used within RuntimePingConverterRootfixProvider',
    );
  }
  return context;
}

// Convenience action creators used by the app shell.
export const setRuntimePingView = (view: RuntimePingView) =>
  ({ type: 'setView' as const, view });

export function saveRuntimePingRecord(dispatch: React.Dispatch<RuntimePingAction>, id?: string) {
  if (id) {
    dispatch({ type: 'update', id, patch: { updatedAt: new Date().toISOString() } });
  } else {
    dispatch({ type: 'add', record: createDefaultRuntimePingRecord() });
  }
}

export function updateRuntimePingStatus(
  dispatch: React.Dispatch<RuntimePingAction>,
  id: string | undefined,
  status: RuntimePingStatus,
) {
  if (!id) return;
  dispatch({ type: 'update', id, patch: { status } });
}

export function deleteRuntimePingRecord(
  dispatch: React.Dispatch<RuntimePingAction>,
  id: string | undefined,
) {
  if (!id) return;
  dispatch({ type: 'remove', id });
}
