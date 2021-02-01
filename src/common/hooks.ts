import * as React from "react";

export function useInputChangeWrapper(onChange: (name: string, value: string) => void) {
  return React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.name, event.target.value);
    },
    [onChange],
  );
}
