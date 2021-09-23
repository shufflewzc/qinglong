import {
  FormOutlined,
  FieldTimeOutlined,
  DiffOutlined,
  SettingOutlined,
  CodeOutlined,
  FolderOutlined,
  RadiusSettingOutlined,
  ControlOutlined,
} from '@ant-design/icons';

export default {
  route: {
    routes: [
      {
        name: '小Faker-登录',
        path: '/login',
        hideInMenu: true,
        component: '@/pages/login/index',
      },
      {
        path: '/crontab',
        name: '小Faker-定时任务',
        icon: <FieldTimeOutlined />,
        component: '@/pages/crontab/index',
      },
      {
        path: '/env',
        name: '小Faker-环境变量',
        icon: <RadiusSettingOutlined />,
        component: '@/pages/env/index',
      },
      {
        path: '/config',
        name: '小Faker-配置文件',
        icon: <ControlOutlined />,
        component: '@/pages/config/index',
      },
      {
        path: '/script',
        name: '小Faker-脚本管理',
        icon: <FormOutlined />,
        component: '@/pages/script/index',
      },
      {
        path: '/diff',
        name: '小Faker-对比工具',
        icon: <DiffOutlined />,
        component: '@/pages/diff/index',
      },
      {
        path: '/log',
        name: '小Faker-任务日志',
        icon: <FolderOutlined />,
        component: '@/pages/log/index',
      },
      {
        path: '/setting',
        name: '小Faker-系统设置',
        icon: <SettingOutlined />,
        component: '@/pages/password/index',
      },
    ],
  },
  navTheme: 'light',
  fixSiderbar: true,
  contentWidth: 'Fixed',
  splitMenus: false,
  logo: '/images/qinglong.png',
} as any;
