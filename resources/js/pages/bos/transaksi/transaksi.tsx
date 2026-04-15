import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import Main from './main';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { usePage } from '@inertiajs/react';
import { Links, Meta } from '@/types/pagination';
import Pagination from '@/components/pagination';
import { Dot, Ellipsis, EllipsisVertical } from 'lucide-react';

type Props = {
    transaksis: DataTransaksi;
};

interface DataTransaksi {
    data: FieldTransaksi[];
    links: Links;
    meta: Meta;
}

type FieldTransaksi = {
    id: number;
    created_at: string;
    nama_bank: string;
    nama_penerima: string;
    no_rekening: string;
    nominal: string;
    uraian: string;
};

export default function Transaksi() {
    const { transaksis } = usePage<Props>().props;


    console.log(transaksis);
    
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-8 text-center">No</TableHead>
                        <TableHead>Uraian</TableHead>
                        <TableHead className="w-60 2xl:w-70">Penerima</TableHead>
                        <TableHead className="w-20 2xl:w-40 text-right">Nominal</TableHead>
                        <TableHead className="w-15 2xl:w-20 text-center">Pilihan</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transaksis ? (
                        transaksis.data.length > 0 ? (
                            transaksis.data.map((item,index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center">{transaksis.meta.from + index}</TableCell>
                                    <TableCell className="whitespace-normal">
                                        {item.uraian}
                                        <p className='italic text-xs text-muted-foreground pt-1.5'>{item.created_at}</p>
                                    </TableCell>
                                    <TableCell className="whitespace-normal">
                                        <p>{item.nama_penerima}</p>
                                        <p className="text-xs text-muted-foreground">{item.nama_bank}</p>
                                        <p className="text-xs text-muted-foreground">{item.no_rekening}</p>
                                    </TableCell>
                                    <TableCell className="text-center">{Number(item.nominal).toLocaleString("id-ID")}</TableCell>
                                    <TableCell className="text-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
                                                size="icon"
                                            >
                                                <EllipsisVertical />
                                                <span className="sr-only">Open menu</span>
                                            </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-32">
                                                <DropdownMenuItem>Pengembalian</DropdownMenuItem>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem variant="destructive">Hapus</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ):(
                            <TableRow>
                                <TableCell colSpan={5}>Tidak ada data.</TableCell>
                            </TableRow>
                        )
                    ):(
                        <TableRow>
                            <TableCell colSpan={5}>Silahkan pilih/klik sekolah pada sidebar disebalah kanan untuk melihat data transaksi.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {transaksis && (
                <div className="grid items-center auto-rows-min gap-4 md:grid-cols-2 py-4">
                    <div className="text-foreground text-sm">
                        {transaksis.meta.from} sampai {transaksis.meta.to} dari total: {transaksis.meta.total}
                    </div>
                    <div className="flex flex-1 flex-row-reverse">
                        <Pagination links={transaksis.links} meta={transaksis?.meta} />
                    </div>
                </div>
            )}
        </>
    );
}

Transaksi.layout = (page: React.ReactNode) => (
    <AppLayout>
        <LayoutBos>
            <Main children={page} />
        </LayoutBos>
    </AppLayout>
)
