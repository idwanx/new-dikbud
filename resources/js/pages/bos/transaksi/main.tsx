import AppLayout from '@/layouts/app-layout';
import { ReactNode } from 'react';
import { dashboard } from '@/routes';
import type { Auth, BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/heading';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SidebarInset } from '@/components/ui/sidebar';
import LayoutBos from '../layout-bos';
import { SidebarSekolah } from './sidebar-sekolah';
import { TabsMenu } from './tab-menu';


type MainLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

type Props = {
    auth: Auth
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transaksi',
        href: dashboard().url,
    },
];

export default function Main({ children }: MainLayoutProps) {
    const page = usePage<Props>();
    const { auth } = page.props;
    
    const userDinas: boolean = auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker';

    return (
         <>
            <Head title="Pengajuan" />
            <SidebarInset>
                <div className="flex flex-1 flex-col mt-(--header-height) h-[calc(100svh-var(--header-height))]!">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} trigger={true} />
                    <div className="p-4 bg-background rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <div className="flex">
                            <Heading
                                title="Transaksi"
                                description="Dibawah ini adalah halaman untuk mengelola data transaksi."
                            />
                        </div>
                        <Separator className="mb-4" />
                        {/* <div className="py-2">
                            <TabsMenu />
                        </div> */}
                        {children}
                    </div>
                </div>
            </SidebarInset>
            {userDinas && (
                <SidebarSekolah />
            )}
        </>
    );
}

Main.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos children={page} breadcrumbs={breadcrumbs} />
    </AppLayout>
)