import { printHello } from '#src/utils/print-hello.js';
import { describe, expect, it, vi } from 'vitest';

describe('index', () => {
  it('should say hello to bob', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    printHello('bob');
    expect(logSpy).toHaveBeenCalledWith('hello bob!');
    logSpy.mockRestore();
  });
});
