import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const Components = {
  Analysis: () => import('@/views/dashboard/Analysis'),
  Workplace: () => import('@/views/dashboard/Workplace'),
  Permission: () => import('@/views/system/permission/index'),
  Role: () => import('@/views/system/role/index'),
  Account: () => import('@/views/system/user/index'),
  Dept: () => import('@/views/system/dept/index'),
  LogAccount: () => import('@/views/log/index'),
  LogDb: () => import('@/views/log/db'),
  WangEditor: () => import('@/views/editor/wangeditor'),
  Center: () => import('@/views/account/center/Index'),
  Settings: () => import('@/views/account/settings/Index'),
  BaseSettings: () => import('@/views/account/settings/BaseSetting'),
  SecuritySettings: () => import('@/views/account/settings/Security'),
  CustomSettings: () => import('@/views/account/settings/Custom'),
  BindingSettings: () => import('@/views/account/settings/Binding'),
  NotificationSettings: () => import('@/views/account/settings/Notification'),
  BasicLayout,
  UserLayout,
  RouteView,
  BlankLayout,
  PageView
}
