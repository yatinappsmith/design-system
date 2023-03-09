// IMPORTANT: please keep this file in sync with packages/design-system-old/src/utils/icon-loadables.tsx.

import React from "react";
import loadable from "@loadable/component";
import {
  RemixiconReactIconProps,
  RemixiconReactIconComponentType,
} from "remixicon-react";

function loadableForIconImpl(
  importFn: () => Promise<any>,
  options?: {
    resolveComponent: (m: any) => React.ComponentType;
  },
) {
  const IconLoader = loadable.lib(importFn, options as any);

  return function AppsmithLoadable(props: any) {
    return (
      // Using `<svg />` as a loading fallback – to make sure sizes set by <IconWrapper>
      // apply even while the full icon is still loading.
      // And passing all props – if the parent component sets `width` or `height`,
      // we want to make sure it’s applied to the loading fallback as well.
      <IconLoader fallback={<svg {...props} />}>
        {(Icon: React.ComponentType) => <Icon {...props} />}
      </IconLoader>
    );
  };
}

export function loadableForSvg(
  importFn: () => Promise<typeof import("*.svg")>,
): React.ComponentType<React.SVGProps<SVGSVGElement>> {
  return loadableForIconImpl(importFn, {
    resolveComponent: (m: typeof import("*.svg")) => m.ReactComponent,
  });
}

export function loadableForRemixIcons(
  importFn: () => Promise<{ default: RemixiconReactIconComponentType }>,
): React.ComponentType<RemixiconReactIconProps> {
  return loadableForIconImpl(importFn);
}
