export interface Route {
  path: string;
  title: string;
  children?: Array<Route>;
}

export const routes: Array<Route> = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About Us',
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
