import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    foo: {
      dependencies: {
        services: ['router']
      }
    }
  }
}

loadInitializers(App, config.modulePrefix);
