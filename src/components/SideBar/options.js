const options = [
  {
    key: 'watch',
    label: 'Watch',
    leftIcon: 'ion-android-mail'
  },
  {
    key: 'performance',
    label: 'Performance',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'processing',
    label: 'Processing',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'jobs',
        label: 'Jobs',
      },
      {
        key: 'tasks',
        label: 'Tasks',
      },
      {
        key: 'organizations',
        label: 'Organizations',
      }
    ],
  },
  {
    key: 'priority',
    label: 'Priority',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'servers',
    label: 'Servers',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'aiEngines',
    label: 'AI Engines',
    leftIcon: 'ion-map',
    children: [
      {
        key: 'activity',
        label: 'Activity',
      },
      {
        key: 'repository',
        label: 'Repository',
      },
    ],
  },
  {
    key: 'database',
    label: 'Database',
    leftIcon: 'ion-clipboard',
  },
  {
    key: 'userManagement',
    label: 'User Management',
    leftIcon: 'ion-fireball',

    children: [
      {
        key: 'users',
        label: 'Users',
      },
      {
        key: 'tokens',
        label: 'Tokens',
      },
    ],
  },
  {
    key: 'errors',
    label: 'Errors',
    leftIcon: 'ion-fireball',

    children: [
      {
        key: 'task',
        label: 'Task',
      },
      {
        key: 'organzination',
        label: 'Organzination',
      },
    ],
  },
  {
    key: 'services',
    label: 'Services',
    leftIcon: 'ion-arrow-graph-up-right',
    children: [
      {
        key: 'unassigned',
        label: 'Unassigned',
      },
      {
        key: 'controller',
        label: 'Controller',
      },
      {
        key: 'db',
        label: 'DB',
      },
      {
        key: 'engine',
        label: 'Engine',
      },
      {
        key: 'repository',
        label: 'Repository',
      }, {
        key: 'agent',
        label: 'Agent',
      },
    ],
  },
  {
    key: 'logs',
    label: 'Logs',
    leftIcon: 'ion-clipboard',
  },
  {
    key: 'congiguration',
    label: 'Congiguration',
    leftIcon: 'ion-android-mail',
    children: [
      {
        key: 'aiengines',
        label: 'AI Engines',
      },
      {
        key: 'services',
        label: 'Services',
      },
      {
        key: 'cloud',
        label: 'Cloud',
      },
      {
        key: 'access',
        label: 'Access',
      },
      {
        key: 'adminui',
        label: 'Admin Ui',
      },
      {
        key: 'syslog',
        label: 'Syslog',
      },
    ],
  }
];
export default options;
