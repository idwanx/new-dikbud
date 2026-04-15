<?php

namespace App\Http\Resources\Bos;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransaksiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'created_at' => Carbon::parse($this->created_at)->format('d M Y'),
            'nama_bank' => $this->nama_bank,
            'nama_penerima' => $this->nama_penerima,
            'no_rekening' => $this->no_rekening,
            'nominal' => $this->nominal,
            'uraian' => $this->uraian,
        ];
    }
}
