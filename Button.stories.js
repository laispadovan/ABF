import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';
import { BufferView } from './decorators';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}> BioFísica </Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
       BioFísica
    </Button>
  ));
  

  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}> Astronomia</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Astronomia
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Biologia - Vírus</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Biologia - Vírus
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Física - Mecânica</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Física - Mecânica
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Física - Termologia</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Física - Termologia
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Física - Ondulatória</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Física - Ondulatória
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Física - Eletricidade</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Física - Eletricidade
    </Button>
  ));


  storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Física - Óptica</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Física - Óptica
    </Button>
  ));

