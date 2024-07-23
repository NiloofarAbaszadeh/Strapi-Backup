import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentManagerComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
    description: '';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    author: Attribute.Relation<
      'plugin::comment-manager.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    subcomments: Attribute.Relation<
      'plugin::comment-manager.comment',
      'oneToMany',
      'plugin::comment-manager.subcomment'
    >;
    from_admin: Attribute.Boolean;
    related_to: Attribute.Relation<
      'plugin::comment-manager.comment',
      'manyToOne',
      'plugin::comment-manager.content-id'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comment-manager.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comment-manager.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentManagerSubcomment extends Schema.CollectionType {
  collectionName: 'subcomments';
  info: {
    singularName: 'subcomment';
    pluralName: 'subcomments';
    displayName: 'Subcomment';
    description: '';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    author: Attribute.Relation<
      'plugin::comment-manager.subcomment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    parent_comment: Attribute.Relation<
      'plugin::comment-manager.subcomment',
      'manyToOne',
      'plugin::comment-manager.comment'
    >;
    from_admin: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comment-manager.subcomment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comment-manager.subcomment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentManagerContentId extends Schema.CollectionType {
  collectionName: 'content_ids';
  info: {
    singularName: 'content-id';
    pluralName: 'content-ids';
    displayName: 'ContentID';
    description: '';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: Attribute.String & Attribute.Unique;
    comments: Attribute.Relation<
      'plugin::comment-manager.content-id',
      'oneToMany',
      'plugin::comment-manager.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comment-manager.content-id',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comment-manager.content-id',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAbeadAbead extends Schema.CollectionType {
  collectionName: 'abeads';
  info: {
    singularName: 'abead';
    pluralName: 'abeads';
    displayName: '\u0627\u0628\u0639\u0627\u062F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    size: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::abead.abead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::abead.abead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    versions: Attribute.Relation<
      'api::abead.abead',
      'manyToMany',
      'api::abead.abead'
    >;
    vuid: Attribute.String;
    versionNumber: Attribute.Integer & Attribute.DefaultTo<1>;
    versionComment: Attribute.String;
    isVisibleInListView: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: '\u0635\u0641\u062D\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    boardImage: Attribute.Media & Attribute.Required;
    boardTitle: Attribute.String & Attribute.Required;
    boardDiscraption: Attribute.String;
    summery: Attribute.Component<'about.summery'>;
    values: Attribute.Component<'about.values'>;
    mission: Attribute.Component<'about.mission'>;
    people: Attribute.Component<'about.people', true> & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    cunter: Attribute.Component<'about.cunter', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAftkharatAftkharat extends Schema.CollectionType {
  collectionName: 'aftkharats';
  info: {
    singularName: 'aftkharat';
    pluralName: 'aftkharats';
    displayName: '\u0627\u0641\u062A\u062E\u0627\u0631\u0627\u062A';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reward: Attribute.Component<'prize.element', true> & Attribute.Required;
    boardImage: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aftkharat.aftkharat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aftkharat.aftkharat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAllCommentAllComment extends Schema.CollectionType {
  collectionName: 'all_comments';
  info: {
    singularName: 'all-comment';
    pluralName: 'all-comments';
    displayName: '\u0646\u0638\u0631\u0627\u062A';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required & Attribute.Private;
    phone: Attribute.String;
    comment: Attribute.RichText & Attribute.Required;
    from: Attribute.String;
    destinationId: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::all-comment.all-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::all-comment.all-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleCategorieArticleCategorie
  extends Schema.CollectionType {
  collectionName: 'article_categories';
  info: {
    singularName: 'article-categorie';
    pluralName: 'article-categories';
    displayName: '\u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u0627\u062E\u0628\u0627\u0631 \u0648 \u0645\u0642\u0627\u0644\u0627\u062A';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    type: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article-categorie.article-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article-categorie.article-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: '\u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    profileImg: Attribute.Media & Attribute.Required;
    discraption: Attribute.RichText;
    desighnation: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBakingTypeBakingType extends Schema.CollectionType {
  collectionName: 'baking_types';
  info: {
    singularName: 'baking-type';
    pluralName: 'baking-types';
    displayName: '\u0646\u0648\u0639 \u067E\u062E\u062A';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bakeType: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::baking-type.baking-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::baking-type.baking-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBazkhwrdNmayndganBazkhwrdNmayndgan
  extends Schema.CollectionType {
  collectionName: 'bazkhwrd_nmayndgans';
  info: {
    singularName: 'bazkhwrd-nmayndgan';
    pluralName: 'bazkhwrd-nmayndgans';
    displayName: '\u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    massage: Attribute.RichText & Attribute.Required;
    senderId: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bazkhwrd-nmayndgan.bazkhwrd-nmayndgan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bazkhwrd-nmayndgan.bazkhwrd-nmayndgan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBodyColorBodyColor extends Schema.CollectionType {
  collectionName: 'body_colors';
  info: {
    singularName: 'body-color';
    pluralName: 'body-colors';
    displayName: '\u0631\u0646\u06AF \u0628\u062F\u0646\u0647';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::body-color.body-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::body-color.body-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandsNameBrandsName extends Schema.CollectionType {
  collectionName: 'brands_names';
  info: {
    singularName: 'brands-name';
    pluralName: 'brands-names';
    displayName: '\u0646\u0627\u0645 \u0628\u0631\u0646\u062F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brands-name.brands-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brands-name.brands-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCallUsCallUs extends Schema.SingleType {
  collectionName: 'call_uss';
  info: {
    singularName: 'call-us';
    pluralName: 'call-uss';
    displayName: '\u0635\u0641\u062D\u0647 \u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactInfo: Attribute.Component<'contact-us-page.constct-company', true> &
      Attribute.Required;
    stores: Attribute.Component<'contact-us-page.location', true> &
      Attribute.Required;
    boardImage: Attribute.Media & Attribute.Required;
    boardTitle: Attribute.String & Attribute.Required;
    boardSubTitle: Attribute.String & Attribute.Required;
    socialMedia: Attribute.Component<'about.social-media'> & Attribute.Required;
    socialTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u062F\u0631 \u0641\u0636\u0627\u06CC \u0645\u062C\u0627\u0632\u06CC \u0628\u0627 \u0645\u0627 \u062F\u0631 \u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627\u0634\u06CC\u062F'>;
    logo: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::call-us.call-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::call-us.call-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCartableFileCartableFile extends Schema.CollectionType {
  collectionName: 'cartable_files';
  info: {
    singularName: 'cartable-file';
    pluralName: 'cartable-files';
    displayName: '\u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u06A9\u0627\u0631\u062A\u0627\u0628\u0644';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    file: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cartable-file.cartable-file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cartable-file.cartable-file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCartableLinkCartableLink extends Schema.SingleType {
  collectionName: 'cartable_links';
  info: {
    singularName: 'cartable-link';
    pluralName: 'cartable-links';
    displayName: '\u0644\u06CC\u0646\u06A9 \u0647\u0627\u06CC \u06A9\u0627\u0631\u062A\u0627\u0628\u0644';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AgentLink: Attribute.Component<'cartable.link', true>;
    AdminLink: Attribute.Component<'cartable.link', true>;
    EmployeLink: Attribute.Component<'cartable.link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cartable-link.cartable-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cartable-link.cartable-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCatalogsInfoCatalogsInfo extends Schema.CollectionType {
  collectionName: 'catalog_infos';
  info: {
    singularName: 'catalogs-info';
    pluralName: 'catalog-infos';
    displayName: '\u06A9\u0627\u062A\u0627\u0644\u0648\u06AF \u0647\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID;
    boardImage: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    catalog: Attribute.Component<'catalog.catalog-info', true>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::catalogs-info.catalogs-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::catalogs-info.catalogs-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollPageCollPage extends Schema.SingleType {
  collectionName: 'coll_pages';
  info: {
    singularName: 'coll-page';
    pluralName: 'coll-pages';
    displayName: '\u0635\u0641\u062D\u0647 \u0644\u06CC\u0633\u062A \u0645\u062D\u0635\u0648\u0644\u0627\u062A';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collectionTitle: Attribute.String;
    collectionImage: Attribute.Media & Attribute.Required;
    groupTitle: Attribute.String;
    groupImage: Attribute.Media & Attribute.Required;
    tileTitle: Attribute.String;
    tileImage: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coll-page.coll-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coll-page.coll-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionsCollections extends Schema.CollectionType {
  collectionName: 'collectionss';
  info: {
    singularName: 'collections';
    pluralName: 'collectionss';
    displayName: '\u06A9\u0627\u0644\u06A9\u0633\u06CC\u0648\u0646 \u0647\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    profileImage: Attribute.Media & Attribute.Required;
    discraption: Attribute.RichText;
    slug: Attribute.UID<'api::collections.collections', 'name'>;
    groups: Attribute.Relation<
      'api::collections.collections',
      'manyToMany',
      'api::groups.groups'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collections.collections',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collections.collections',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColorThemeColorTheme extends Schema.CollectionType {
  collectionName: 'color_themes';
  info: {
    singularName: 'color-theme';
    pluralName: 'color-themes';
    displayName: '\u062A\u0645 \u0631\u0646\u06AF\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::color-theme.color-theme',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::color-theme.color-theme',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDesignTypeDesignType extends Schema.CollectionType {
  collectionName: 'design_types';
  info: {
    singularName: 'design-type';
    pluralName: 'design-types';
    displayName: '\u0646\u0648\u0639 \u0637\u0631\u0627\u062D\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    design: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::design-type.design-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::design-type.design-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEgentNoticeEgentNotice extends Schema.CollectionType {
  collectionName: 'egent_notices';
  info: {
    singularName: 'egent-notice';
    pluralName: 'egent-notices';
    displayName: '\u0627\u0639\u0644\u0627\u0646 \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::egent-notice.egent-notice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::egent-notice.egent-notice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExternalAgentExternalAgent extends Schema.CollectionType {
  collectionName: 'external_agents';
  info: {
    singularName: 'external-agent';
    pluralName: 'external-agents';
    displayName: '\u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646 \u062E\u0627\u0631\u062C\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::external-agent.external-agent', 'fullName'>;
    store: Attribute.Component<'agent-store.store-info', true> &
      Attribute.Required;
    personeli: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::external-agent.external-agent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::external-agent.external-agent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: '\u067E\u0627\u0648\u0631\u0642\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    whiteLogo: Attribute.Media & Attribute.Required;
    navOption: Attribute.Component<'data.nav-link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlazeTypeGlazeType extends Schema.CollectionType {
  collectionName: 'glaze_types';
  info: {
    singularName: 'glaze-type';
    pluralName: 'glaze-types';
    displayName: '\u0646\u0648\u0639 \u0644\u0639\u0627\u0628';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    glaze: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::glaze-type.glaze-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::glaze-type.glaze-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGroupsGroups extends Schema.CollectionType {
  collectionName: 'groupss';
  info: {
    singularName: 'groups';
    pluralName: 'groupss';
    displayName: '\u06AF\u0631\u0648\u0647 \u0647\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    GroupImage: Attribute.Media & Attribute.Required;
    discraption: Attribute.RichText;
    complementaryGroup: Attribute.Relation<
      'api::groups.groups',
      'oneToMany',
      'api::groups.groups'
    >;
    slug: Attribute.UID<'api::groups.groups', 'name'> & Attribute.Required;
    tiles: Attribute.Relation<
      'api::groups.groups',
      'manyToMany',
      'api::product.product'
    >;
    collections: Attribute.Relation<
      'api::groups.groups',
      'manyToMany',
      'api::collections.collections'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::groups.groups',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::groups.groups',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGwahyDakhlyGwahyDakhly extends Schema.CollectionType {
  collectionName: 'gwahy_dakhlies';
  info: {
    singularName: 'gwahy-dakhly';
    pluralName: 'gwahy-dakhlies';
    displayName: '\u06AF\u0648\u0627\u0647\u06CC \u062F\u0627\u062E\u0644\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reward: Attribute.Component<'prize.element', true>;
    boardImage: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gwahy-dakhly.gwahy-dakhly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gwahy-dakhly.gwahy-dakhly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGwahyKharjyGwahyKharjy extends Schema.CollectionType {
  collectionName: 'gwahy_kharjies';
  info: {
    singularName: 'gwahy-kharjy';
    pluralName: 'gwahy-kharjies';
    displayName: '\u06AF\u0648\u0627\u0647\u06CC \u062E\u0627\u0631\u062C\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reward: Attribute.Component<'prize.element', true>;
    boardImage: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gwahy-kharjy.gwahy-kharjy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gwahy-kharjy.gwahy-kharjy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: '\u0633\u0631 \u0635\u0641\u062D\u0647';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    navOption: Attribute.Component<'data.nav-link', true> & Attribute.Required;
    leftIcons: Attribute.Component<'data.social-media', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: '\u0635\u0641\u062D\u0647 \u062E\u0627\u0646\u0647';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID;
    Slider: Attribute.Component<'home-elements.slider', true> &
      Attribute.Required;
    aboutUs: Attribute.Component<'home-elements.about-us'> & Attribute.Required;
    newsElements: Attribute.Component<'home-elements.news-elements'> &
      Attribute.Required;
    groupElements: Attribute.Component<'home-elements.group-elements'> &
      Attribute.Required;
    articleElements: Attribute.Component<'home-elements.news-elements'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    ourWork: Attribute.Component<'home-elements.option-boxs'>;
    doneWork: Attribute.Component<'home-elements.news-elements'>;
    newInWrold: Attribute.Component<'home-elements.new-in-wrold'>;
    comments: Attribute.Component<'home-elements.news-elements'>;
    Parallax: Attribute.Component<'home-elements.parallax'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInternalAgentsNameInternalAgentsName
  extends Schema.CollectionType {
  collectionName: 'internal_agents_names';
  info: {
    singularName: 'internal-agents-name';
    pluralName: 'internal-agents-names';
    displayName: '\u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646 \u062F\u0627\u062E\u0644\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::internal-agents-name.internal-agents-name',
      'fullName'
    > &
      Attribute.Required;
    store: Attribute.Component<'agent-store.store-info', true>;
    personeli: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::internal-agents-name.internal-agents-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::internal-agents-name.internal-agents-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKarbranKarbran extends Schema.CollectionType {
  collectionName: 'karbrans';
  info: {
    singularName: 'karbran';
    pluralName: 'karbrans';
    displayName: '\u06A9\u0627\u0631\u0628\u0631\u0627\u0646';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    username: Attribute.String & Attribute.Required;
    password: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::karbran.karbran', 'username'> &
      Attribute.Required;
    profileImage: Attribute.Media & Attribute.Required;
    fullName: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.DefaultTo<'info@setareh.com'>;
    company: Attribute.String & Attribute.Required;
    isVerified: Attribute.Boolean;
    status: Attribute.Enumeration<
      [
        '\u0641\u0639\u0627\u0644',
        '\u063A\u06CC\u0631 \u0641\u0639\u0627\u0644'
      ]
    > &
      Attribute.DefaultTo<'\u063A\u06CC\u0631 \u0641\u0639\u0627\u0644'>;
    favorite: Attribute.JSON;
    role: Attribute.Enumeration<
      [
        '\u0646\u0645\u0627\u06CC\u0646\u062F\u0647',
        '\u0627\u062F\u0645\u06CC\u0646',
        '\u0627\u0645\u0648\u0631 \u0627\u062F\u0627\u0631\u06CC',
        '\u0627\u0645\u0648\u0631 \u0645\u0627\u0644\u06CC',
        '\u062E\u0627\u0646\u0647 \u0628\u0647\u062F\u0627\u0634\u062A',
        '\u0627\u0645\u0648\u0631 \u062D\u0642\u0648\u0642\u06CC',
        '\u0627\u0646\u0628\u0627\u0631 \u0642\u0637\u0639\u0627\u062A',
        '\u0627\u0646\u0628\u0627\u0631 \u0645\u0648\u0627\u062F',
        '\u0627\u0646\u0628\u0627\u0631 \u0645\u0648\u0631\u0627\u062F \u0644\u06CC\u0641\u062A\u0631\u0627\u06A9',
        '\u0627\u0646\u062A\u0638\u0627\u0645\u0627\u062A',
        '\u0627\u0646\u0641\u0648\u0631\u0645\u0627\u062A\u06CC\u06A9',
        '\u0622\u0632\u0645\u0627\u06CC\u0634\u06AF\u0627\u0647 \u062F\u06CC\u0648\u0627\u0631',
        '\u0622\u0632\u0645\u0627\u06CC\u0634\u06AF\u0627\u0647 \u06A9\u0641',
        '\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC',
        '\u0628\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u06A9\u0641',
        '\u0628\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u062F\u06CC\u0648\u0627\u0631',
        '\u067E\u0631\u0633 \u062F\u06CC\u0648\u0627\u0631',
        '\u067E\u0631\u0633 \u06A9\u0641',
        '\u062A\u062D\u0642\u06CC\u0642 \u0648 \u062A\u0648\u0633\u0639\u0647',
        '\u062A\u0636\u0645\u06CC\u0646 \u06A9\u06CC\u0641\u06CC\u062A',
        '\u06A9\u0646\u062A\u0631\u0644 \u062A\u0648\u0644\u06CC\u062F',
        '\u0645\u062F\u06CC\u0631 \u062A\u0648\u0644\u06CC\u062F \u0628\u062F\u0646\u0647',
        '\u062E\u0637 \u0644\u0639\u0627\u0628 \u06A9\u0641',
        '\u0633\u0648\u067E\u0631\u0648\u0627\u06CC\u0632\u0631',
        '\u0637\u0631\u0627\u062D\u06CC',
        '\u0641\u0631\u0648\u0634',
        '\u0641\u0631\u0648\u0634 \u062F\u0641\u062A\u0631 \u062A\u0647\u0631\u0627\u0646',
        '\u0641\u0646\u06CC \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9',
        '\u0641\u0646\u06CC \u062A\u0631\u0627\u0634\u06A9\u0627\u0631\u06CC',
        '\u0641\u0646\u06CC \u0628\u0631\u0642',
        '\u06A9\u0646\u062A\u0631\u0644 \u06A9\u06CC\u0641\u06CC \u06A9\u0641',
        '\u06A9\u0648\u0631\u0647',
        '\u0644\u0639\u0627\u0628 \u0633\u0627\u0632\u06CC',
        '\u0645\u062F\u06CC\u0631 \u0639\u0627\u0645\u0644',
        '\u0645\u0634\u062A\u0631\u06A9 \u062A\u0648\u0644\u06CC\u062F',
        '\u062A\u0647\u06CC\u0647 \u0628\u062F\u0646\u0647',
        '\u0628\u0627\u0632\u0631\u06AF\u0627\u0646\u06CC',
        '\u0628\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u062F\u0631\u062C\u0647 \u0632\u0646',
        '\u0641\u0646\u06CC \u062A\u0627\u0633\u06CC\u0633\u0627\u062A',
        '\u0628\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u0644\u06CC\u0641\u062A\u0631\u0627\u06A9',
        '\u0641\u0646\u06CC \u0645\u06A9\u0627\u0646\u06CC\u06A9',
        '\u0641\u0646\u06CC \u0646\u0642\u0627\u0634\u06CC \u0648 \u0633\u0631\u0648\u06CC\u0633\u06A9\u0627\u0631\u06CC',
        '\u06A9\u0646\u062A\u0631\u0644 \u06A9\u06CC\u0641\u06CC \u062F\u06CC\u0648\u0627\u0631',
        '\u062E\u062F\u0645\u0627\u062A',
        '\u0641\u0646\u06CC \u0633\u06CC\u0645 \u067E\u06CC\u0686\u06CC',
        '\u0641\u0646\u06CC \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC \u0648 \u062A\u0639\u0645\u06CC\u0631\u0627\u062A',
        '\u0645\u062F\u06CC\u0631 \u0641\u0646\u06CC',
        '\u062E\u0637 \u0644\u0639\u0627\u0628 \u062F\u06CC\u0648\u0627\u0631',
        '\u0641\u0646\u06CC \u062C\u0648\u0634\u06A9\u0627\u0631\u06CC'
      ]
    >;
    seen: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::karbran.karbran',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::karbran.karbran',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLoginLogin extends Schema.SingleType {
  collectionName: 'logins';
  info: {
    singularName: 'login';
    pluralName: 'logins';
    displayName: '\u0635\u0641\u062D\u0647 \u0648\u0631\u0648\u062F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMoldeTypeMoldeType extends Schema.CollectionType {
  collectionName: 'molde_types';
  info: {
    singularName: 'molde-type';
    pluralName: 'molde-types';
    displayName: '\u0646\u0648\u0639 \u0642\u0627\u0644\u0628';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    molde: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::molde-type.molde-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::molde-type.molde-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMwjwdyKashyHaMwjwdyKashyHa extends Schema.CollectionType {
  collectionName: 'mwjwdy_kashy_has';
  info: {
    singularName: 'mwjwdy-kashy-ha';
    pluralName: 'mwjwdy-kashy-has';
    displayName: '\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0634\u06CC \u0647\u0627';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    file: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mwjwdy-kashy-ha.mwjwdy-kashy-ha',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mwjwdy-kashy-ha.mwjwdy-kashy-ha',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsElementNewsElement extends Schema.CollectionType {
  collectionName: 'news_elements';
  info: {
    singularName: 'news-element';
    pluralName: 'news-elements';
    displayName: '\u062E\u0628\u0631';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    discraption: Attribute.RichText & Attribute.Required;
    author: Attribute.Relation<
      'api::news-element.news-element',
      'oneToOne',
      'api::author.author'
    >;
    mainImage: Attribute.Media & Attribute.Required;
    sideImages: Attribute.Media;
    subject: Attribute.String & Attribute.Required;
    highLightedText: Attribute.RichText;
    personStatement: Attribute.Component<'news.person-comment', true>;
    likes: Attribute.Integer;
    date: Attribute.String & Attribute.Required;
    summery: Attribute.Text;
    tags: Attribute.Relation<
      'api::news-element.news-element',
      'oneToMany',
      'api::tag.tag'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-element.news-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-element.news-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsPageNewsPage extends Schema.SingleType {
  collectionName: 'news_pages';
  info: {
    singularName: 'news-page';
    pluralName: 'news-pages';
    displayName: '\u0635\u0641\u062D\u0647 \u0627\u062E\u0628\u0627\u0631';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    boardImage: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: '\u06A9\u0627\u0634\u06CC';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    isItNew: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Availability: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::product.product', 'name'>;
    baseInfo: Attribute.Component<'place.base-info'> & Attribute.Required;
    groups: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::groups.groups'
    >;
    sideImages: Attribute.Media;
    seo: Attribute.Component<'shared.seo'>;
    discraption: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductTypeProductType extends Schema.CollectionType {
  collectionName: 'product_types';
  info: {
    singularName: 'product-type';
    pluralName: 'product-types';
    displayName: '\u0646\u0648\u0639 \u0645\u062D\u0635\u0648\u0644';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    type: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-type.product-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-type.product-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecruitmentFormRecruitmentForm
  extends Schema.CollectionType {
  collectionName: 'recruitment_forms';
  info: {
    singularName: 'recruitment-form';
    pluralName: 'recruitment-forms';
    displayName: '\u0641\u0631\u0645 \u0647\u0627\u06CC \u0627\u0633\u062A\u062E\u062F\u0627\u0645';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    acquaintanceToSetareh: Attribute.String;
    acquaintancesInfo: Attribute.String;
    address: Attribute.String;
    addressState: Attribute.String;
    birthDay: Attribute.String;
    birthPlace: Attribute.String;
    children: Attribute.String;
    currentWorkPlace: Attribute.String;
    demandedJob: Attribute.String;
    experienceInSetareh: Attribute.String;
    familybrathers: Attribute.String;
    familyfathersJob: Attribute.String;
    familymather: Attribute.String;
    familymathersJob: Attribute.String;
    familysisters: Attribute.String;
    familyspouse: Attribute.String;
    familyspousesJob: Attribute.String;
    fatherName: Attribute.String;
    fieldOfStudy: Attribute.String;
    fullName: Attribute.String;
    height: Attribute.String;
    insuranceNumber: Attribute.String;
    internshipHistory: Attribute.String;
    introduceBy1address: Attribute.String;
    introduceBy1fullName: Attribute.String;
    introduceBy1mobile: Attribute.String;
    introduceBy1relationship: Attribute.String;
    introduceBy2address: Attribute.String;
    introduceBy2fullName: Attribute.String;
    introduceBy2mobile: Attribute.String;
    introduceBy2relationship: Attribute.String;
    language: Attribute.String;
    languageState: Attribute.String;
    lastEducationalCertificate: Attribute.String;
    maritalStatus: Attribute.String;
    militaryService: Attribute.String;
    mobile: Attribute.String;
    nationalCode: Attribute.String;
    personId: Attribute.String;
    phone: Attribute.String;
    physicalCondition: Attribute.String;
    remissionReason: Attribute.String;
    remissionState: Attribute.String;
    requestExtraBenefits: Attribute.String;
    salaryRequested: Attribute.String;
    serviceUnit: Attribute.String;
    skillsAtWork: Attribute.String;
    specializedCertificate: Attribute.String;
    university: Attribute.String;
    weight: Attribute.String;
    workExperience1address: Attribute.String;
    workExperience1company: Attribute.String;
    workExperience1income: Attribute.String;
    workExperience1leavingReason: Attribute.String;
    workExperience1phonNumber: Attribute.String;
    workExperience1side: Attribute.String;
    workExperience1workExperience: Attribute.String;
    workExperience2address: Attribute.String;
    workExperience2company: Attribute.String;
    workExperience2income: Attribute.String;
    workExperience2leavingReason: Attribute.String;
    workExperience2phonNumber: Attribute.String;
    workExperience2side: Attribute.String;
    workExperience2workExperience: Attribute.String;
    workExperience3address: Attribute.String;
    workExperience3company: Attribute.String;
    workExperience3income: Attribute.String;
    workExperience3leavingReason: Attribute.String;
    workExperience3phonNumber: Attribute.String;
    workExperience3side: Attribute.String;
    workExperience3workExperience: Attribute.String;
    allowChangeSide: Attribute.Boolean;
    extraWork: Attribute.Boolean;
    missionOutsideWorkTime: Attribute.Boolean;
    workThreeShiftes: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recruitment-form.recruitment-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recruitment-form.recruitment-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResearchResearch extends Schema.CollectionType {
  collectionName: 'researchs';
  info: {
    singularName: 'research';
    pluralName: 'researchs';
    displayName: '\u0645\u0642\u0627\u0644\u0627\u062A';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::research.research', 'title'>;
    discraption: Attribute.RichText & Attribute.Required;
    author: Attribute.Relation<
      'api::research.research',
      'oneToOne',
      'api::author.author'
    >;
    mainImage: Attribute.Media & Attribute.Required;
    sideImage: Attribute.Media;
    subject: Attribute.String;
    highlightedText: Attribute.RichText;
    personStatement: Attribute.Component<'news.person-comment'>;
    likes: Attribute.Integer;
    date: Attribute.String & Attribute.Required;
    summery: Attribute.String;
    tags: Attribute.Relation<
      'api::research.research',
      'oneToMany',
      'api::tag.tag'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::research.research',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::research.research',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResearchPageResearchPage extends Schema.SingleType {
  collectionName: 'research_pages';
  info: {
    singularName: 'research-page';
    pluralName: 'research-pages';
    displayName: '\u0635\u0641\u062D\u0647 \u0645\u0642\u0627\u0644\u0627\u062A';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    boardImage: Attribute.Media & Attribute.Required;
    slug: Attribute.UID<'api::research-page.research-page', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::research-page.research-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::research-page.research-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShapeTypeShapeType extends Schema.CollectionType {
  collectionName: 'shape_types';
  info: {
    singularName: 'shape-type';
    pluralName: 'shape-types';
    displayName: '\u0646\u0648\u0639 \u0634\u06A9\u0644';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    shape: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shape-type.shape-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shape-type.shape-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecialFeaturesSpecialFeatures
  extends Schema.CollectionType {
  collectionName: 'special_featuress';
  info: {
    singularName: 'special-features';
    pluralName: 'special-featuress';
    displayName: '\u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u062E\u0627\u0635';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    feature: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::special-features.special-features',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::special-features.special-features',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStampTypeStampType extends Schema.CollectionType {
  collectionName: 'stamp_types';
  info: {
    singularName: 'stamp-type';
    pluralName: 'stamp-types';
    displayName: '\u0646\u0648\u0639 \u0686\u0627\u067E';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stamp: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stamp-type.stamp-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stamp-type.stamp-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: '\u062A\u06AF \u0647\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tagName: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiUsagePlaceUsagePlace extends Schema.CollectionType {
  collectionName: 'usage_places';
  info: {
    singularName: 'usage-place';
    pluralName: 'usage-places';
    displayName: '\u0645\u06A9\u0627\u0646 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    place: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::usage-place.usage-place',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::usage-place.usage-place',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVisitVisit extends Schema.CollectionType {
  collectionName: 'visits';
  info: {
    singularName: 'visit';
    pluralName: 'visits';
    displayName: '\u0628\u0627\u0632\u062F\u06CC\u062F \u0647\u0627';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    discraption: Attribute.RichText & Attribute.Required;
    author: Attribute.Relation<
      'api::visit.visit',
      'oneToOne',
      'api::author.author'
    >;
    mainImage: Attribute.Media & Attribute.Required;
    sideImages: Attribute.Media;
    Subject: Attribute.String;
    highlightedText: Attribute.RichText;
    personStatement: Attribute.Component<'news.person-comment'>;
    likes: Attribute.BigInteger & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    summery: Attribute.Text & Attribute.Required;
    tags: Attribute.Relation<'api::visit.visit', 'oneToMany', 'api::tag.tag'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::visit.visit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::visit.visit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVisitPageVisitPage extends Schema.SingleType {
  collectionName: 'visit_pages';
  info: {
    singularName: 'visit-page';
    pluralName: 'visit-pages';
    displayName: '\u0635\u0641\u062D\u0647 \u0628\u0627\u0632\u062F\u06CC\u062F';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    boardImage: Attribute.Media & Attribute.Required;
    slug: Attribute.UID<'api::visit-page.visit-page', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::visit-page.visit-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::visit-page.visit-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::comment-manager.comment': PluginCommentManagerComment;
      'plugin::comment-manager.subcomment': PluginCommentManagerSubcomment;
      'plugin::comment-manager.content-id': PluginCommentManagerContentId;
      'api::abead.abead': ApiAbeadAbead;
      'api::about.about': ApiAboutAbout;
      'api::aftkharat.aftkharat': ApiAftkharatAftkharat;
      'api::all-comment.all-comment': ApiAllCommentAllComment;
      'api::article-categorie.article-categorie': ApiArticleCategorieArticleCategorie;
      'api::author.author': ApiAuthorAuthor;
      'api::baking-type.baking-type': ApiBakingTypeBakingType;
      'api::bazkhwrd-nmayndgan.bazkhwrd-nmayndgan': ApiBazkhwrdNmayndganBazkhwrdNmayndgan;
      'api::body-color.body-color': ApiBodyColorBodyColor;
      'api::brands-name.brands-name': ApiBrandsNameBrandsName;
      'api::call-us.call-us': ApiCallUsCallUs;
      'api::cartable-file.cartable-file': ApiCartableFileCartableFile;
      'api::cartable-link.cartable-link': ApiCartableLinkCartableLink;
      'api::catalogs-info.catalogs-info': ApiCatalogsInfoCatalogsInfo;
      'api::coll-page.coll-page': ApiCollPageCollPage;
      'api::collections.collections': ApiCollectionsCollections;
      'api::color-theme.color-theme': ApiColorThemeColorTheme;
      'api::design-type.design-type': ApiDesignTypeDesignType;
      'api::egent-notice.egent-notice': ApiEgentNoticeEgentNotice;
      'api::external-agent.external-agent': ApiExternalAgentExternalAgent;
      'api::footer.footer': ApiFooterFooter;
      'api::glaze-type.glaze-type': ApiGlazeTypeGlazeType;
      'api::groups.groups': ApiGroupsGroups;
      'api::gwahy-dakhly.gwahy-dakhly': ApiGwahyDakhlyGwahyDakhly;
      'api::gwahy-kharjy.gwahy-kharjy': ApiGwahyKharjyGwahyKharjy;
      'api::header.header': ApiHeaderHeader;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::internal-agents-name.internal-agents-name': ApiInternalAgentsNameInternalAgentsName;
      'api::karbran.karbran': ApiKarbranKarbran;
      'api::login.login': ApiLoginLogin;
      'api::molde-type.molde-type': ApiMoldeTypeMoldeType;
      'api::mwjwdy-kashy-ha.mwjwdy-kashy-ha': ApiMwjwdyKashyHaMwjwdyKashyHa;
      'api::news-element.news-element': ApiNewsElementNewsElement;
      'api::news-page.news-page': ApiNewsPageNewsPage;
      'api::product.product': ApiProductProduct;
      'api::product-type.product-type': ApiProductTypeProductType;
      'api::recruitment-form.recruitment-form': ApiRecruitmentFormRecruitmentForm;
      'api::research.research': ApiResearchResearch;
      'api::research-page.research-page': ApiResearchPageResearchPage;
      'api::shape-type.shape-type': ApiShapeTypeShapeType;
      'api::special-features.special-features': ApiSpecialFeaturesSpecialFeatures;
      'api::stamp-type.stamp-type': ApiStampTypeStampType;
      'api::tag.tag': ApiTagTag;
      'api::usage-place.usage-place': ApiUsagePlaceUsagePlace;
      'api::visit.visit': ApiVisitVisit;
      'api::visit-page.visit-page': ApiVisitPageVisitPage;
    }
  }
}
