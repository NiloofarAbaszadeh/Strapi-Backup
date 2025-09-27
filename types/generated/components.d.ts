import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutCunter extends Schema.Component {
  collectionName: 'components_about_cunters';
  info: {
    displayName: 'cunter';
    icon: 'book';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    content: Attribute.String & Attribute.Required;
  };
}

export interface AboutMission extends Schema.Component {
  collectionName: 'components_about_missions';
  info: {
    displayName: 'Mission';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText;
    subdiscraption: Attribute.RichText;
  };
}

export interface AboutPeople extends Schema.Component {
  collectionName: 'components_about_people';
  info: {
    displayName: 'people';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    socialMedia: Attribute.Component<'about.social-media'> & Attribute.Required;
  };
}

export interface AboutSocialMedia extends Schema.Component {
  collectionName: 'components_about_social_medias';
  info: {
    displayName: 'socialMedia';
  };
  attributes: {
    twitterLink: Attribute.String & Attribute.Required;
    linkdinLink: Attribute.String & Attribute.Required;
    facebookLink: Attribute.String & Attribute.Required;
    instagramLink: Attribute.String & Attribute.Required;
  };
}

export interface AboutSummery extends Schema.Component {
  collectionName: 'components_about_summeries';
  info: {
    displayName: 'summery';
    icon: 'check';
  };
  attributes: {
    rightImage: Attribute.Media & Attribute.Required;
    start: Attribute.Text & Attribute.Required;
    discraption: Attribute.RichText & Attribute.Required;
    leftImage: Attribute.Media & Attribute.Required;
    aboutTiles: Attribute.String & Attribute.Required;
    discraptionTiles: Attribute.RichText & Attribute.Required;
  };
}

export interface AboutTileSample extends Schema.Component {
  collectionName: 'components_about_tile_samples';
  info: {
    displayName: 'tileSample';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    samples: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface AboutTitle extends Schema.Component {
  collectionName: 'components_about_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    discraption: Attribute.RichText;
    sampleTile: Attribute.Component<'about.tile-sample', true> &
      Attribute.Required;
  };
}

export interface AboutValu extends Schema.Component {
  collectionName: 'components_about_valus';
  info: {
    displayName: 'valu';
    description: '';
  };
  attributes: {
    valueName: Attribute.String & Attribute.Required;
    valueDiscraption: Attribute.RichText & Attribute.Required;
    valueImg: Attribute.Media & Attribute.Required;
    valueSubName: Attribute.String & Attribute.Required;
  };
}

export interface AboutValues extends Schema.Component {
  collectionName: 'components_about_values';
  info: {
    displayName: 'values';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText;
    valu: Attribute.Component<'about.valu', true> & Attribute.Required;
  };
}

export interface AboutVision extends Schema.Component {
  collectionName: 'components_about_visions';
  info: {
    displayName: 'vision';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface AgentStoreContactInfo extends Schema.Component {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'contact info';
    icon: 'user';
    description: '';
  };
  attributes: {
    phoneNumber: Attribute.BigInteger;
  };
}

export interface AgentStoreStoreInfo extends Schema.Component {
  collectionName: 'components_agent_store_store_infos';
  info: {
    displayName: 'StoreInfo';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    address: Attribute.RichText & Attribute.Required;
    workHours: Attribute.Text;
    StoreNumber: Attribute.BigInteger;
    faxNumber: Attribute.BigInteger;
  };
}

export interface CartableFiles extends Schema.Component {
  collectionName: 'components_cartable_files';
  info: {
    displayName: 'files';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    file: Attribute.Media;
  };
}

export interface CartableLink extends Schema.Component {
  collectionName: 'components_cartable_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    LinkName: Attribute.String & Attribute.Required;
    LinkIcon: Attribute.Media & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface CatalogCatalogInfo extends Schema.Component {
  collectionName: 'components_catalog_catalog_infos';
  info: {
    displayName: 'catalogInfo';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    file: Attribute.Media & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface CommentNewsComment extends Schema.Component {
  collectionName: 'components_comment_news_comments';
  info: {
    displayName: 'newsComment';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required & Attribute.Private;
    comment: Attribute.RichText & Attribute.Required;
  };
}

export interface ContactUsPageConstctCompany extends Schema.Component {
  collectionName: 'components_contact_us_page_constct_companies';
  info: {
    displayName: 'constctCompany';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText & Attribute.Required;
  };
}

export interface ContactUsPageLocation extends Schema.Component {
  collectionName: 'components_contact_us_page_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    address: Attribute.RichText & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email;
    image: Attribute.Media;
  };
}

export interface DataDropdownLink extends Schema.Component {
  collectionName: 'components_data_dropdown_links';
  info: {
    displayName: 'dropdownLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface DataItem extends Schema.Component {
  collectionName: 'components_data_items';
  info: {
    displayName: 'Item';
    icon: 'alien';
    description: '';
  };
  attributes: {
    itemTest: Attribute.String;
    tm_rngy: Attribute.Relation<
      'data.item',
      'oneToOne',
      'api::color-theme.color-theme'
    >;
  };
}

export interface DataNavLink extends Schema.Component {
  collectionName: 'components_data_nav_links';
  info: {
    displayName: 'navLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Url: Attribute.String;
    dropdown: Attribute.Component<'data.dropdown-link', true>;
  };
}

export interface DataSocialMedia extends Schema.Component {
  collectionName: 'components_data_social_medias';
  info: {
    displayName: 'navIcons';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    Url: Attribute.String & Attribute.Unique;
  };
}

export interface ElementsCompanyInformation extends Schema.Component {
  collectionName: 'components_elements_company_informations';
  info: {
    displayName: 'Company Information';
    description: '';
  };
  attributes: {
    qr_code: Attribute.Component<'elements.qr-code'>;
    phone: Attribute.String;
    email: Attribute.Email;
    website: Attribute.String;
    address: Attribute.Text;
    working_hours: Attribute.String;
  };
}

export interface ElementsNavFooter extends Schema.Component {
  collectionName: 'components_elements_nav_footers';
  info: {
    displayName: 'Nav Footer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    options: Attribute.Component<'elements.nav-items-footer', true> &
      Attribute.Required;
  };
}

export interface ElementsNavItemsFooter extends Schema.Component {
  collectionName: 'components_elements_nav_items_footers';
  info: {
    displayName: 'Nav Items Footer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface ElementsQrCode extends Schema.Component {
  collectionName: 'components_elements_qr_codes';
  info: {
    displayName: 'Qr code';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    note: Attribute.Text;
  };
}

export interface HomeElementsAboutUs extends Schema.Component {
  collectionName: 'components_home_elements_aboutuses';
  info: {
    displayName: 'aboutUs';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.String & Attribute.Required;
    linkText: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    sideTitle: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    video: Attribute.Media;
    videoTitle: Attribute.String;
    summery: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'home-elements.button'> & Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsBoxImages extends Schema.Component {
  collectionName: 'components_home_elements_box_images';
  info: {
    displayName: 'boxImages';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    discraption: Attribute.String & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface HomeElementsBox extends Schema.Component {
  collectionName: 'components_home_elements_boxes';
  info: {
    displayName: 'box';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.Text & Attribute.Required;
    sideImage: Attribute.Media & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
    mainImage: Attribute.Media & Attribute.Required;
  };
}

export interface HomeElementsButton extends Schema.Component {
  collectionName: 'components_home_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface HomeElementsCounters extends Schema.Component {
  collectionName: 'components_home_elements_counters';
  info: {
    displayName: 'counters';
  };
  attributes: {
    amount: Attribute.BigInteger & Attribute.Required;
    redText: Attribute.String & Attribute.Required;
    blackText: Attribute.String & Attribute.Required;
  };
}

export interface HomeElementsGroupElements extends Schema.Component {
  collectionName: 'components_home_elements_group_elements';
  info: {
    displayName: 'groupElements';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    buttonTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    button: Attribute.Component<'home-elements.button'> & Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsMainShow extends Schema.Component {
  collectionName: 'components_home_elements_main_shows';
  info: {
    displayName: 'MainShow';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    MainImage: Attribute.Media & Attribute.Required;
    ShowPins: Attribute.Component<'home-elements.show-pin', true> &
      Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsNewInWrold extends Schema.Component {
  collectionName: 'components_home_elements_new_in_wrolds';
  info: {
    displayName: 'newInWrold';
    icon: 'connector';
    description: '';
  };
  attributes: {
    redtext: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText & Attribute.Required;
    bigImg: Attribute.Media & Attribute.Required;
    smallImg: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'home-elements.button'> & Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsNewsElements extends Schema.Component {
  collectionName: 'components_home_elements_news_elements';
  info: {
    displayName: 'newsElements';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.String & Attribute.Required;
    SubTitle: Attribute.String & Attribute.Required;
    item: Attribute.Component<'home-elements.box-images', true>;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsOptionBoxs extends Schema.Component {
  collectionName: 'components_home_elements_option_boxs';
  info: {
    displayName: 'optionBoxs';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    boxs: Attribute.Component<'home-elements.box', true> & Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    mainImage: Attribute.Media & Attribute.Required;
  };
}

export interface HomeElementsParallax extends Schema.Component {
  collectionName: 'components_home_elements_parallaxes';
  info: {
    displayName: 'Parallax';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    button: Attribute.Component<'home-elements.button'> & Attribute.Required;
    image: Attribute.Media;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface HomeElementsScheduling extends Schema.Component {
  collectionName: 'components_home_elements_schedulings';
  info: {
    displayName: 'Scheduling';
    description: '';
  };
  attributes: {
    startDatee: Attribute.Date;
    startTime: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    endDate: Attribute.Date;
    endTime: Attribute.Time & Attribute.DefaultTo<'23:45'>;
  };
}

export interface HomeElementsShowPin extends Schema.Component {
  collectionName: 'components_home_elements_show_pins';
  info: {
    displayName: 'ShowPin';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    tile: Attribute.Relation<
      'home-elements.show-pin',
      'oneToOne',
      'api::product.product'
    >;
    left: Attribute.BigInteger & Attribute.Required;
    top: Attribute.BigInteger & Attribute.Required;
  };
}

export interface HomeElementsSlider extends Schema.Component {
  collectionName: 'components_home_elements_sliders';
  info: {
    displayName: 'slider';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    Subject: Attribute.String;
    Title: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    state: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    schedule: Attribute.Component<'home-elements.scheduling'>;
    link: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

export interface NewsPersonComment extends Schema.Component {
  collectionName: 'components_news_person_comments';
  info: {
    displayName: 'personComment';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    discraption: Attribute.RichText & Attribute.Required;
  };
}

export interface PlaceBaseInfo extends Schema.Component {
  collectionName: 'components_place_base_infos';
  info: {
    displayName: 'base info';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    type: Attribute.Relation<
      'place.base-info',
      'oneToMany',
      'api::product-type.product-type'
    >;
    size: Attribute.Relation<'place.base-info', 'oneToOne', 'api::abead.abead'>;
    shape: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::shape-type.shape-type'
    >;
    design: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::design-type.design-type'
    >;
    color_themes: Attribute.Relation<
      'place.base-info',
      'oneToMany',
      'api::color-theme.color-theme'
    >;
    bodyColor: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::body-color.body-color'
    >;
    brandName: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::brands-name.brands-name'
    >;
    galeb: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::molde-type.molde-type'
    >;
    glazeType: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::glaze-type.glaze-type'
    >;
    bakeType: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::baking-type.baking-type'
    >;
    stamp: Attribute.Relation<
      'place.base-info',
      'oneToOne',
      'api::stamp-type.stamp-type'
    >;
    special_types: Attribute.Relation<
      'place.base-info',
      'oneToMany',
      'api::special-features.special-features'
    >;
    use_places: Attribute.Relation<
      'place.base-info',
      'oneToMany',
      'api::usage-place.usage-place'
    >;
  };
}

export interface PrizeElement extends Schema.Component {
  collectionName: 'components_prize_elements';
  info: {
    displayName: 'element';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    profileImage: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialMediaFooter extends Schema.Component {
  collectionName: 'components_elements_social_media_footers';
  info: {
    displayName: 'Social Media Footer';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    medias: Attribute.Component<'data.social-media', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.cunter': AboutCunter;
      'about.mission': AboutMission;
      'about.people': AboutPeople;
      'about.social-media': AboutSocialMedia;
      'about.summery': AboutSummery;
      'about.tile-sample': AboutTileSample;
      'about.title': AboutTitle;
      'about.valu': AboutValu;
      'about.values': AboutValues;
      'about.vision': AboutVision;
      'agent-store.contact-info': AgentStoreContactInfo;
      'agent-store.store-info': AgentStoreStoreInfo;
      'cartable.files': CartableFiles;
      'cartable.link': CartableLink;
      'catalog.catalog-info': CatalogCatalogInfo;
      'comment.news-comment': CommentNewsComment;
      'contact-us-page.constct-company': ContactUsPageConstctCompany;
      'contact-us-page.location': ContactUsPageLocation;
      'data.dropdown-link': DataDropdownLink;
      'data.item': DataItem;
      'data.nav-link': DataNavLink;
      'data.social-media': DataSocialMedia;
      'elements.company-information': ElementsCompanyInformation;
      'elements.nav-footer': ElementsNavFooter;
      'elements.nav-items-footer': ElementsNavItemsFooter;
      'elements.qr-code': ElementsQrCode;
      'home-elements.about-us': HomeElementsAboutUs;
      'home-elements.box-images': HomeElementsBoxImages;
      'home-elements.box': HomeElementsBox;
      'home-elements.button': HomeElementsButton;
      'home-elements.counters': HomeElementsCounters;
      'home-elements.group-elements': HomeElementsGroupElements;
      'home-elements.main-show': HomeElementsMainShow;
      'home-elements.new-in-wrold': HomeElementsNewInWrold;
      'home-elements.news-elements': HomeElementsNewsElements;
      'home-elements.option-boxs': HomeElementsOptionBoxs;
      'home-elements.parallax': HomeElementsParallax;
      'home-elements.scheduling': HomeElementsScheduling;
      'home-elements.show-pin': HomeElementsShowPin;
      'home-elements.slider': HomeElementsSlider;
      'news.person-comment': NewsPersonComment;
      'place.base-info': PlaceBaseInfo;
      'prize.element': PrizeElement;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-media-footer': SharedSocialMediaFooter;
    }
  }
}
