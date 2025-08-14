import type { Schema, Struct } from '@strapi/strapi';

export interface HeroNewComponent extends Struct.ComponentSchema {
  collectionName: 'components_hero_new_components';
  info: {
    displayName: 'New Component';
    icon: 'alien';
  };
  attributes: {
    testMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    testText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.new-component': HeroNewComponent;
    }
  }
}
