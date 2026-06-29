import { useEffect, useMemo } from 'react';
import {
  InsightsRuntimePingConverterRootfix,
  PipelineBoardRuntimePingConverterRootfix,
  RecordEditorRuntimePingConverterRootfix,
  RecordOperationsRuntimePingConverterRootfix,
  type InsightsRuntimePingConverterRootfixProps,
  type PipelineBoardRuntimePingConverterRootfixProps,
  type RecordEditorRuntimePingConverterRootfixProps,
  type RecordOperationsRuntimePingConverterRootfixProps,
} from './screens';
import {
  RuntimePingConverterRootfixProvider,
  useRuntimePingConverterRootfix,
  deleteRuntimePingRecord,
  saveRuntimePingRecord,
  setRuntimePingView,
  updateRuntimePingStatus,
} from './features/runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';
import type {
  RuntimePingState,
  RuntimePingView,
} from './features/runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.store';
import { actCreateRecord } from './features/surf-record-operations/act_create_record';
import { actRetryLoad } from './features/surf-record-operations/act_retry_load';
import { actSelectRecord } from './features/surf-record-operations/act_select_record';
import { actCancelEdit } from './features/surf-record-editor/act_cancel_edit';
import { actSaveRecord } from './features/surf-record-editor/act_save_record';
import type { RuntimePingRecord } from './features/runtime-ping-converter-rootfix/runtime-ping-converter-rootfix.repo';

function noop() {
  // Intentionally empty: action is not wired to business logic in this story.
}

interface RuntimePingAppBridge {
  state: RuntimePingState;
  actions: Record<string, (...args: any[]) => void>;
  view: RuntimePingView;
  selectedRecord: RuntimePingRecord | null;
  recordCount: number;
  storageStatus: 'persisted' | 'unavailable';
  lastError: string | null;
  activePanel: RuntimePingView;
}

declare global {
  interface Window {
    app?: RuntimePingAppBridge;
  }
}

function AppShell() {
  const { state, dispatch } = useRuntimePingConverterRootfix();

  const selectedRecord =
    state.records.find((record) => record.id === state.selectedId) ?? null;

  const ids = state.records.map((record) => record.id);
  const row1 = ids[0];
  const row2 = ids[1];
  const row3 = ids[2];
  const row4 = ids[3];

  const navOperations = () => dispatch(setRuntimePingView('operations'));
  const navBoard = () => dispatch(setRuntimePingView('board'));
  const navInsights = () => dispatch(setRuntimePingView('insights'));
  const navEditor = () => dispatch(setRuntimePingView('editor'));

  const selectAndEdit = (id: string | undefined) => {
    if (!id) return;
    actSelectRecord(dispatch)(id);
  };

  const actions = useMemo(
    () => ({
      setView: (view: Parameters<typeof setRuntimePingView>[0]) =>
        dispatch(setRuntimePingView(view)),
      saveRecord: (
        id?: string,
        patch?: Partial<Omit<RuntimePingRecord, 'id' | 'createdAt'>>,
      ) => saveRuntimePingRecord(dispatch, id, patch),
      updateStatus: (id: string | undefined, status: Parameters<typeof updateRuntimePingStatus>[2]) =>
        updateRuntimePingStatus(dispatch, id, status),
      deleteRecord: (id: string | undefined) => deleteRuntimePingRecord(dispatch, id),
      selectAndEdit,
      navOperations,
      navBoard,
      navInsights,
      navEditor,
    }),
    [dispatch, selectAndEdit, navOperations, navBoard, navInsights, navEditor],
  );

  useEffect(() => {
    window.app = {
      state,
      actions,
      view: state.view,
      selectedRecord,
      recordCount: state.records.length,
      storageStatus: typeof localStorage !== 'undefined' ? 'persisted' : 'unavailable',
      lastError: state.error,
      activePanel: state.view,
    };
    return () => {
      delete window.app;
    };
  }, [state, actions, selectedRecord]);

  const operationsActions: RecordOperationsRuntimePingConverterRootfixProps['actions'] = useMemo(
    () => ({
      'act-create-record-1': actCreateRecord(dispatch),
      'settings-2': noop,
      'help-3': noop,
      'act-retry-load-4': actRetryLoad(dispatch),
      'act-create-record-5': actCreateRecord(dispatch),
      'status-all-6': () => dispatch({ type: 'setStatusFilter', statusFilter: 'all' }),
      'date-last-7-days-7': () => dispatch({ type: 'setDateRange', dateRange: '7d' }),
      'view-details-8': () => selectAndEdit(row1),
      'edit-9': () => selectAndEdit(row1),
      'delete-10': () => deleteRuntimePingRecord(dispatch, row1),
      'view-details-11': () => selectAndEdit(row2),
      'edit-12': () => selectAndEdit(row2),
      'delete-13': () => deleteRuntimePingRecord(dispatch, row2),
      'view-details-14': () => selectAndEdit(row3),
      'edit-15': () => selectAndEdit(row3),
      'delete-16': () => deleteRuntimePingRecord(dispatch, row3),
      'view-details-17': () => selectAndEdit(row4),
      'edit-18': () => selectAndEdit(row4),
      'delete-19': () => deleteRuntimePingRecord(dispatch, row4),
      'previous-20': noop,
      '1-21': noop,
      '2-22': noop,
      '3-23': noop,
      'next-24': noop,
      'operations-1': navOperations,
      'board-2': navBoard,
      'insights-3': navInsights,
      'editor-4': navEditor,
      'operations-5': navOperations,
      'board-6': navBoard,
      'insights-7': navInsights,
      'editor-8': navEditor,
    }),
    [dispatch, row1, row2, row3, row4],
  );

  const editorActions: RecordEditorRuntimePingConverterRootfixProps['actions'] = useMemo(
    () => ({
      'new-record-1': actCreateRecord(dispatch),
      'menu-2': noop,
      'settings-3': noop,
      'help-4': noop,
      'show-advanced-configuration-5': noop,
      'cancel-6': actCancelEdit(dispatch),
      'save-record-7': actSaveRecord(dispatch, state.selectedId ?? undefined),
      'operations-1': navOperations,
      'board-2': navBoard,
      'insights-3': navInsights,
      'editor-4': navEditor,
      'operations-5': navOperations,
      'board-6': navBoard,
      'insights-7': navInsights,
    }),
    [dispatch, state.selectedId],
  );

  const boardActions: PipelineBoardRuntimePingConverterRootfixProps['actions'] = useMemo(
    () => ({
      'new-record-1': navEditor,
      'menu-2': noop,
      'settings-3': noop,
      'help-4': noop,
      'filter-5': noop,
      'sort-6': noop,
      'more-horiz-7': noop,
      'play-arrow-8': () => updateRuntimePingStatus(dispatch, row1, 'running'),
      'play-arrow-9': () => updateRuntimePingStatus(dispatch, row2, 'running'),
      'more-horiz-10': noop,
      'pause-11': () => updateRuntimePingStatus(dispatch, row1, 'paused'),
      'more-horiz-12': noop,
      'resolve-13': () => updateRuntimePingStatus(dispatch, row1, 'resolved'),
      'more-horiz-14': noop,
      'operations-1': navOperations,
      'board-2': navBoard,
      'insights-3': navInsights,
      'editor-4': navEditor,
      'operations-5': navOperations,
      'board-6': navBoard,
      'insights-7': navInsights,
    }),
    [dispatch, row1, row2],
  );

  const insightsActions: InsightsRuntimePingConverterRootfixProps['actions'] = useMemo(
    () => ({
      'settings-1': noop,
      'help-2': noop,
      'new-record-3': navEditor,
      'filter-insights-4': noop,
      'export-summary-5': noop,
      '1h-6': () => dispatch({ type: 'setDateRange', dateRange: '1h' }),
      '24h-7': () => dispatch({ type: 'setDateRange', dateRange: '24h' }),
      '7d-8': () => dispatch({ type: 'setDateRange', dateRange: '7d' }),
      'operations-1': navOperations,
      'board-2': navBoard,
      'insights-3': navInsights,
      'operations-4': navOperations,
      'board-5': navBoard,
      'insights-6': navInsights,
      'editor-7': navEditor,
    }),
    [dispatch],
  );

  return (
    <div
      data-setfarm-root="runtime-ping-converter-rootfix"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {state.view === 'operations' && (
        <RecordOperationsRuntimePingConverterRootfix actions={operationsActions} />
      )}
      {state.view === 'editor' && (
        <RecordEditorRuntimePingConverterRootfix actions={editorActions} />
      )}
      {state.view === 'board' && (
        <PipelineBoardRuntimePingConverterRootfix actions={boardActions} />
      )}
      {state.view === 'insights' && (
        <InsightsRuntimePingConverterRootfix actions={insightsActions} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <RuntimePingConverterRootfixProvider>
      <AppShell />
    </RuntimePingConverterRootfixProvider>
  );
}
