import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ikkan',
  description: 'Docs for the Ikkan framework',
  icons: {
    icon: '/icon.svg',
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
