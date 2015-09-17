import React from 'react';
import Library from './';
import Component from './library-component';

import Icon from '@economist/component-icon/index.js';
import IconPackage from '@economist/component-icon/package.json';
import IconPackageExample from '@economist/component-icon/example.js';

import Palette from '@economist/component-palette/index.js';
import PalettePackage from '@economist/component-palette/package.json';
import PaletteExample from '@economist/component-palette/example.js';

import Typography from '@economist/component-typography/index.js';
import TypographyPackage from '@economist/component-typography/package.json';
import TypographyExample from '@economist/component-typography/example.js';

export default (
  <Library>
    <Component metadata={PalettePackage} component={Palette}>
      {PaletteExample}
    </Component>

    <Component metadata={TypographyPackage} component={Typography}>
      {TypographyExample}
    </Component>

    <Component metadata={IconPackage} component={Icon}>
      {IconPackageExample}
    </Component>

  </Library>
);
