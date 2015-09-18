import React from 'react';
import Library from './';
import Component from './library-component';

import IconPackage from '@economist/component-icon/package.json';
import IconPackageExample from '@economist/component-icon/example.js';

import PalettePackage from '@economist/component-palette/package.json';
import PaletteExample from '@economist/component-palette/example.js';

import TypographyPackage from '@economist/component-typography/package.json';
import TypographyExample from '@economist/component-typography/example.js';

import GridPackage from '@economist/component-grid/package.json';
import GridExample from '@economist/component-grid/example.js';

export default (
  <Library>
    <Component metadata={PalettePackage}>
      {PaletteExample}
    </Component>

    <Component metadata={TypographyPackage}>
      {TypographyExample}
    </Component>

    <Component metadata={IconPackage}>
      {IconPackageExample}
    </Component>

    <Component metadata={GridPackage}>
      {GridExample}
    </Component>
  </Library>
);
