export interface Route {
  path: string;
  title: string;
  children?: Array<Route>;
  subpath?: string;
  subtitle?: string;
}

export const routes: Array<Route> = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About Us',
    subpath: '/join',
    subtitle: 'Join Us',
  },
  {
    path: '/services',
    title: 'Services',
  },
  {
    path: '/alumni',
    title: 'Alumni',
  },
  {
    path: '/sponsors',
    title: 'Sponsors',
  },
  {
    path: '/#contact',
    title: 'Contact',
  },
];
