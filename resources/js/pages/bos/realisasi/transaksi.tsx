import AppLayout from '@/layouts/app-layout';
import LayoutBos from '../layout-bos';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import Main from './main';

export default function Transaksi() {
   

    return (
        <>
            sdlsdls
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
