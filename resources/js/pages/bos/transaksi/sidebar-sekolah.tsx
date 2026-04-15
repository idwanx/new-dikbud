import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import bos from "@/routes/bos";

interface Props {
    daftarSekolahs: Jenjangs[];
    sekolah: Sekolah;
    tahun: number;
    [key: string]: unknown;
}

interface Jenjangs {
    slug: string;
    nama_jenjang: string;
    sekolahs: Sekolahs[];
}

interface Sekolahs {
    npsn: string;
    jenjang: string;
    nama_sekolah: string;
}

type Sekolah = {
    nama_sekolah: string;
    npsn: string;
    slug: string;
};

export function SidebarSekolah() {
    const { daftarSekolahs, tahun, jenjangs, npsn } = usePage<Props>().props;
    
    return (
        <Sidebar
            className="sticky hidden border-l lg:flex top-(--header-height) h-[calc(100svh-var(--header-height))]!"
            variant="inset"
        >
            <SidebarContent>
                {daftarSekolahs ? (
                daftarSekolahs.map((item) => (
                    <Fragment key={item.slug}>
                        <SidebarGroup key={item.slug} className="p-0">
                            <Collapsible
                                defaultOpen={item.slug === jenjangs}
                                className="group/collapsible p-0"
                            >
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-sm"
                            >
                                <CollapsibleTrigger>
                                    {item.nama_jenjang}{" "}
                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.sekolahs.length > 0 ? (
                                            item.sekolahs.map((fields) => (
                                            <SidebarMenuItem key={fields.npsn}>
                                                <SidebarMenuButton 
                                                    isActive={fields.npsn === npsn}
                                                    className="cursor-pointer"
                                                >
                                                    <Link 
                                                        href={bos.transaksi.persekolah({ tahun: tahun, jenjangs: item.slug, npsn: fields.npsn }).url}
                                                    >
                                                        {fields.nama_sekolah}
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            ))
                                        ):(
                                            <span className="px-2">Tidak ada data sekolah.</span>
                                        )}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                            </Collapsible>
                        </SidebarGroup>
                        <SidebarSeparator className="mx-0" />
                    </Fragment>
                ))
            ):(
                <span className="text-sm">Tidak ada data</span>
            )}
            </SidebarContent>
        </Sidebar>
    );
}
