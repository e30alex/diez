import {Haiku} from '@diez/designsystem';
import {join} from 'path';
import {IosBinding} from '../../api';
import {sourcesPath} from '../../utils';

const binding: IosBinding<Haiku> = {
  sources: [join(sourcesPath, 'ios', 'bindings', 'Haiku.swift')],
  imports: ['UIKit.UIView', 'WebKit'],
  updateable: true,
  initializer: (instance) => `Haiku(withComponent: "${instance.component}")`,
};

export = binding;
