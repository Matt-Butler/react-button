import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TerraButton from '../index';

storiesOf('TerraButton', module)
  .add('Default', () => (
    <TerraButton onClick={ linkTo('TerraButton', 'Primary') }>Default Button</TerraButton>
  ))
  .add('Primary', () => (
    <TerraButton tStyle="primary" onClick={ linkTo('TerraButton', 'Secondary') }>Primary Button</TerraButton>
  ))
  .add('Secondary', () => (
    <TerraButton tStyle="secondary" onClick={ linkTo('TerraButton', 'Positive') }>Secondary Button</TerraButton>
  ))
  .add('Positive', () => (
    <TerraButton tStyle="positive" onClick={ linkTo('TerraButton', 'Negative') }>Positive Button</TerraButton>
  ))
  .add('Negative', () => (
    <TerraButton tStyle="negative" onClick={ linkTo('TerraButton', 'Warning') }>Negative Button</TerraButton>
  ))
  .add('Warning', () => (
    <TerraButton tStyle="warning" onClick={ linkTo('TerraButton', 'Info') }>Warning Button</TerraButton>
  ))
  .add('Info', () => (
    <TerraButton tStyle="info" onClick={ linkTo('TerraButton', 'Default') }>Info Button</TerraButton>
  ));
