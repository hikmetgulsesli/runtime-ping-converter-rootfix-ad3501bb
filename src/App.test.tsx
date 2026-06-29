import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import { resetRuntimePingConverterRootfixState } from './test/bridge';

describe('App', () => {
  beforeEach(() => {
    resetRuntimePingConverterRootfixState();
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('mounts the root as a flex viewport container', () => {
    render(<App />);
    const root = screen.getByTestId('setfarm-app-root');
    expect(root).toHaveClass('relative');
    expect(root).toHaveClass('flex');
    expect(root).toHaveClass('min-h-screen');
    expect(root).toHaveClass('w-full');
    expect(root).toHaveClass('overflow-hidden');
  });

  it('switches visible generated screen when navigation actions are triggered', async () => {
    render(<App />);

    // Default operations view.
    expect(document.querySelector('[data-action-id="status-all-6"]')).toBeInTheDocument();

    // Navigate to board view.
    await userEvent.click(document.querySelector('[data-action-id="board-2"]') as HTMLElement);
    expect(document.querySelector('[data-action-id="sort-6"]')).toBeInTheDocument();

    // Navigate to insights view.
    await userEvent.click(document.querySelector('[data-action-id="insights-3"]') as HTMLElement);
    expect(document.querySelector('[data-action-id="1h-6"]')).toBeInTheDocument();

    // Navigate to editor view.
    await userEvent.click(document.querySelector('[data-action-id="editor-7"]') as HTMLElement);
    expect(document.querySelector('[data-action-id="save-record-7"]')).toBeInTheDocument();
  });
});
