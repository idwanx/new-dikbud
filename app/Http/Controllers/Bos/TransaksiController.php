<?php

namespace App\Http\Controllers\Bos;

use App\Events\TransaksiEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bos\PengajuanRequest;
use App\Http\Resources\Bos\TransaksiResource;
use App\Models\Pengajuan;
use App\Models\Transaksi;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class TransaksiController extends Controller
{
    public $roleuser;
    public $loadDefault = '20';

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }

    public function index(Request $request): RedirectResponse
    {
        // return Inertia::render('bos/transaksi/transaksi', [

        // ]);

        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
            return redirect()->route('bos.transaksi.persekolah', [
                'tahun' => $request->tahun,
            ]);
        } else {
            return redirect()->route('bos.transaksi.persekolah', [
                'tahun' => $request->tahun,
                'jenjangs' => $this->roleuser->jenjang,
                'npsn' => $this->roleuser->npsn,
            ]);
        }
    }

    public function transaksi_persekolah(Request $request): Response
    {
        if ($request->npsn) {
            if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
                $sekolah = DB::table('sekolahs')->select('sekolahs.id')->where('npsn', $request->npsn)->firstOrFail();

                $transaksis = DB::table('transaksis')->select('transaksis.id', 'transaksis.uraian', 
                        'transaksis.nominal', 'transaksis.created_at', 'penerimas.nama_penerima', 'penerimas.nama_bank', 'penerimas.no_rekening')
                        ->leftJoin('penerimas', 'transaksis.penerima_id', '=', 'penerimas.id')
                        ->where('transaksis.sekolah_id', $sekolah->id)
                        ->orderBy('transaksis.created_at', 'desc');
            } else {
                $transaksis = DB::table('transaksis')->select('transaksis.id', 'transaksis.uraian', 
                        'transaksis.nominal', 'transaksis.created_at', 'penerimas.nama_penerima', 'penerimas.nama_bank', 'penerimas.no_rekening')
                        ->leftJoin('penerimas', 'transaksis.penerima_id', '=', 'penerimas.id')
                        ->where('transaksis.sekolah_id', $this->roleuser->sekolah_id)
                        ->orderBy('transaksis.created_at', 'desc');
            }
        } else {
            $transaksis = null;
        }

        return Inertia::render('bos/transaksi/transaksi', [
            'jenjangs' => $request->jenjangs,
            'npsn' => $request->npsn,
            'transaksis' => $request->npsn ? TransaksiResource::collection($transaksis->paginate($request->load ?? $this->loadDefault)->withQueryString()) : $transaksis
        ]);
    }

    public function store_transaksi(PengajuanRequest $request)
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        $collect = collect($request->optionpajaks);

        try {
            if (!empty($request->input('optionpajaks'))) {
                $transaksi = Transaksi::create([
                    'sekolah_id' => $this->roleuser->sekolah_id,
                    'pengajuan_id' => $request->pengajuan_id,
                    'penerima_id' => $request->penerima_id,
                    'rka_id' => $request->rka_id,
                    'sumber_dana_id' => $request->sumber_dana_id,
                    'rincian_belanja_id' => $request->rincian_belanja_id,
                    'sub_jenis_transaksi_id' => 1,
                    'uraian' => $request->uraian,
                    'nominal' => $request->nominal-$collect->sum('jumlah_pajak'),
                ]);

                foreach ($request->optionpajaks as $row) {
                    $explodePajak = explode('-', $row['pajak_id']);

                    $transaksi = Transaksi::create([
                        'sekolah_id' => $this->roleuser->sekolah_id,
                        'pengajuan_id' => $request->pengajuan_id,
                        'penerima_id' => $request->penerima_pajak,
                        'rka_id' => $request->rka_id,
                        'sumber_dana_id' => $request->sumber_dana_id,
                        'rincian_belanja_id' => $request->rincian_belanja_id,
                        'sub_jenis_transaksi_id' => $explodePajak[0],
                        'parent_id' => $transaksi->id,
                        'uraian' => $explodePajak[1]." - ".$request->uraian,
                        'nominal' => $row['jumlah_pajak'],
                    ]);
                }
            } else {
                $transaksi = Transaksi::create([
                    'sekolah_id' => $this->roleuser->sekolah_id,
                    'pengajuan_id' => $request->pengajuan_id,
                    'penerima_id' => $request->penerima_id,
                    'rka_id' => $request->rka_id,
                    'sumber_dana_id' => $request->sumber_dana_id,
                    'rincian_belanja_id' => $request->rincian_belanja_id,
                    'sub_jenis_transaksi_id' => 1,
                    'uraian' => $request->uraian,
                    'nominal' => $request->nominal,
                ]);
            }

            if ($transaksi->wasRecentlyCreated) {
                Inertia::flash([
                    'status' => 'success',
                    'message' => 'Rincian pengajuan berhasil ditambahkan.',
                ]);
                
                return back();
            }

        } catch (Exception) {
            
            Inertia::flash([
                'type' => 'error',
                'message' => 'Rincian pengajuan gagal ditambahkan, hubungi admin.',
            ]);

            return back();
        }
    }

    public function validasi_transaksi(Request $request): RedirectResponse
    {
        if(Gate::denies('isTimDinas')) {
            abort(404);
        }

        $findPengajuan = Pengajuan::select('id', 'sekolah_id', 'validated_at')->where('slug', $request->nomor)->firstOrFail();

        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval") {
            $findPengajuan->update([
                'approved_at' => now(),
                'status' => 'disetujui',
            ]);
        } else {
            $findPengajuan->update([
                'validated_at' => now(),
                'status' => 'divalidasi',
            ]);
        }
        
        foreach ($request->data as $item) {
            DB::table('transaksis')
                ->where('id', $item['id'])
                ->update([
                    'status' => $item['status']
                ]);
        }

        // $transaksis = Transaksi::where('pengajuan_id', $findPengajuan->id)
        // ->chunkById(200, function (Collection $transaksis) {
        //     $transaksis->each->update(['status' => 'divalidasi']);
        // }, column: 'id');

        // $findPengajuan->transaksis()->update([
        //     'status' => 'divalidasi',
        // ]);

        $newData = [
            'info' => "pengajuan-update",
            'data' => [
                'id' => $findPengajuan->id,
                'status' => $findPengajuan->status,
            ]
        ];

        broadcast(new TransaksiEvent($findPengajuan->sekolah_id, $newData))->toOthers();

        Inertia::flash([
            'status' => 'success',
            'message' => 'Rincian pengajuan berhasil divalidasi.',
        ]);
            
        return back();
    }

    public function destroy_transaksi(Transaksi $transaksi): RedirectResponse
    {
        if(Gate::denies('canAkses', $transaksi)) {
            abort(404);
        }

        try {
            $transaksi->delete();

            Inertia::flash([
                'status' => 'success',
                'message' => 'Pengajuan '.$transaksi->uraian.' berhasil dihapus',
            ]);
            
            return back();

        } catch (Exception) {
            $transaksi->delete();

            Inertia::flash([
                'status' => 'error',
                'message' => 'Gagal dihapus, hubungi admin',
            ]);

            return back();
        }
    }
}
