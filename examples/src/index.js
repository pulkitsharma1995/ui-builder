/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import ButtonComponent from './components/button';
import Input from './components/input';
import React from 'react';
import {View} from 'react-native';
import {get} from 'lodash';
import Checkbox from './components/Checkbox';

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component, theme) {
    const type = get(component, 'type', '');
    switch (type) {
      case 'input':
        return <Input componentData={component} />;
      case 'button':
        return <ButtonComponent componentData={component} />;
      case 'checkbox':
        return <Checkbox {...component.properties} />;
    }
  }

  render() {
    const {source} = this.props;
    return (
      <View>
        {source.map((component) => {
          return this.selectComponent(component);
        })}
      </View>
    );
  }
}
