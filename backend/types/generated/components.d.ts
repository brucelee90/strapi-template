import type { Schema, Struct } from '@strapi/strapi';

export interface CtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {};
}

export interface CtaLink extends Struct.ComponentSchema {
  collectionName: 'components_cta_links';
  info: {
    displayName: 'Link';
  };
  attributes: {};
}

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
      'cta.button': CtaButton;
      'cta.link': CtaLink;
      'hero.test': HeroTest;
    }
  }
}
