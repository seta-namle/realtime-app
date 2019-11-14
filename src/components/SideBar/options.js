const options = [
  {
    key: 'home',
    label: 'Home',
    leftIcon: 'home'
  },
  {
    key: 'tag',
    label: 'Tagged',
    leftIcon: 'tags'
  },
  {
    key: 'processing',
    label: 'Processing',
    leftIcon: 'sync',
    children: [
      {
        key: 'organizations',
        label: 'Organizations'
      },
      {
        key: 'jobs',
        label: 'Jobs'
      },
      {
        key: 'tasks',
        label: 'Tasks'
      },
      {
        key: 'priority',
        label: 'Priority'
      }
    ]
  },
  {
    key: 'servers',
    label: 'Servers',
    leftIcon: 'cloud-server'
  },
  {
    key: 'aiEngines',
    label: 'AI Engines',
    leftIcon: 'deployment-unit',
    children: [
      {
        key: 'activity',
        label: 'Activity'
      },
      {
        key: 'repository',
        label: 'Repository'
      }
    ]
  },
  {
    key: 'database',
    label: 'Database',
    leftIcon: 'database'
  },
  {
    key: 'userManagement',
    label: 'User Management',
    leftIcon: 'team',

    children: [
      {
        key: 'users',
        label: 'Users'
      },
      {
        key: 'tokens',
        label: 'Tokens'
      }
    ]
  },
  {
    key: 'errors',
    label: 'Errors',
    leftIcon: 'close-circle',

    children: [
      {
        key: 'task',
        label: 'Task'
      },
      {
        key: 'organzination',
        label: 'Organzination'
      }
    ]
  },
  {
    key: 'services',
    label: 'Services',
    leftIcon: 'cloud',
    children: [
      {
        key: 'unassigned',
        label: 'Unassigned'
      },
      {
        key: 'controller',
        label: 'Controller'
      },
      {
        key: 'db',
        label: 'DB'
      },
      {
        key: 'engine',
        label: 'Engine'
      },
      {
        key: 'repository',
        label: 'Repository'
      },
      {
        key: 'agent',
        label: 'Agent'
      }
    ]
  },
  {
    key: 'logs',
    label: 'Logs',
    leftIcon: 'info-circle'
  },
  {
    key: 'configuration',
    label: 'Configuration',
    leftIcon: 'setting',
    children: [
      {
        key: 'deployment',
        label: 'Deployment'
      },
      {
        key: 'subAIEngine',
        label: 'AI Engines'
      },
      {
        key: 'subServices',
        label: 'Services'
      },
      {
        key: 'access',
        label: 'Access'
      },
      {
        key: 'adminui',
        label: 'Admin Ui'
      },
      {
        key: 'syslog',
        label: 'Syslog'
      }
    ]
  }
];
export default options;
