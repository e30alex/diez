import {Image} from '@diez/designsystem';
import {Component, property} from '@diez/engine';
import {ImageNames} from './assets';
import {palette, textStyles} from './constants';

/**
 * The navigation title design.
 */
export class NavigationTitleDesign extends Component {
  @property barTintColor = palette.white;
  @property icon = Image.scaled(ImageNames.Icon, 3);
  @property title = 'PITTED';
  @property textStyle = textStyles.headerTitle;
}