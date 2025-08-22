import type { Schema, Struct } from '@strapi/strapi';

export interface HeroTest extends Struct.ComponentSchema {
  collectionName: 'components_hero_tests';
  info: {
    displayName: 'test';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.test': HeroTest;
    }
  }
}
