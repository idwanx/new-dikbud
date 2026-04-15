import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
export const index = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/transaksi/index',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
index.url = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tahun: args }
    }

    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
    }

    return index.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
index.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
index.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
const indexForm = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
indexForm.get = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::index
* @see app/Http/Controllers/Bos/TransaksiController.php:30
* @route '/bos/{tahun?}/transaksi/index'
*/
indexForm.head = (args?: { tahun?: string | number } | [tahun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
export const transaksi_persekolah = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transaksi_persekolah.url(args, options),
    method: 'get',
})

transaksi_persekolah.definition = {
    methods: ["get","head"],
    url: '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
transaksi_persekolah.url = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tahun: args[0],
            jenjangs: args[1],
            npsn: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "tahun",
        "jenjangs",
        "npsn",
    ])

    const parsedArgs = {
        tahun: args?.tahun,
        jenjangs: args?.jenjangs,
        npsn: args?.npsn,
    }

    return transaksi_persekolah.definition.url
            .replace('{tahun?}', parsedArgs.tahun?.toString() ?? '')
            .replace('{jenjangs?}', parsedArgs.jenjangs?.toString() ?? '')
            .replace('{npsn?}', parsedArgs.npsn?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
transaksi_persekolah.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transaksi_persekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
transaksi_persekolah.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transaksi_persekolah.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
const transaksi_persekolahForm = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transaksi_persekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
transaksi_persekolahForm.get = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transaksi_persekolah.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::transaksi_persekolah
* @see app/Http/Controllers/Bos/TransaksiController.php:49
* @route '/bos/{tahun?}/transaksi/{jenjangs?}/{npsn?}'
*/
transaksi_persekolahForm.head = (args?: { tahun?: string | number, jenjangs?: string | number, npsn?: string | number } | [tahun: string | number, jenjangs: string | number, npsn: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transaksi_persekolah.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

transaksi_persekolah.form = transaksi_persekolahForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:78
* @route '/transaksi/store'
*/
export const store_transaksi = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store_transaksi.url(options),
    method: 'post',
})

store_transaksi.definition = {
    methods: ["post"],
    url: '/transaksi/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:78
* @route '/transaksi/store'
*/
store_transaksi.url = (options?: RouteQueryOptions) => {
    return store_transaksi.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:78
* @route '/transaksi/store'
*/
store_transaksi.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store_transaksi.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:78
* @route '/transaksi/store'
*/
const store_transaksiForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store_transaksi.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::store_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:78
* @route '/transaksi/store'
*/
store_transaksiForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store_transaksi.url(options),
    method: 'post',
})

store_transaksi.form = store_transaksiForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:205
* @route '/transaksi/destroy/{transaksi}'
*/
export const destroy_transaksi = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_transaksi.url(args, options),
    method: 'delete',
})

destroy_transaksi.definition = {
    methods: ["delete"],
    url: '/transaksi/destroy/{transaksi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:205
* @route '/transaksi/destroy/{transaksi}'
*/
destroy_transaksi.url = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaksi: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi: typeof args.transaksi === 'object'
        ? args.transaksi.id
        : args.transaksi,
    }

    return destroy_transaksi.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:205
* @route '/transaksi/destroy/{transaksi}'
*/
destroy_transaksi.delete = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_transaksi.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:205
* @route '/transaksi/destroy/{transaksi}'
*/
const destroy_transaksiForm = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy_transaksi.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::destroy_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:205
* @route '/transaksi/destroy/{transaksi}'
*/
destroy_transaksiForm.delete = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy_transaksi.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy_transaksi.form = destroy_transaksiForm

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:150
* @route '/transaksi/validasi/{nomor}'
*/
export const validasi_transaksi = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validasi_transaksi.url(args, options),
    method: 'post',
})

validasi_transaksi.definition = {
    methods: ["post"],
    url: '/transaksi/validasi/{nomor}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:150
* @route '/transaksi/validasi/{nomor}'
*/
validasi_transaksi.url = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { nomor: args }
    }

    if (Array.isArray(args)) {
        args = {
            nomor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        nomor: args.nomor,
    }

    return validasi_transaksi.definition.url
            .replace('{nomor}', parsedArgs.nomor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:150
* @route '/transaksi/validasi/{nomor}'
*/
validasi_transaksi.post = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validasi_transaksi.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:150
* @route '/transaksi/validasi/{nomor}'
*/
const validasi_transaksiForm = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: validasi_transaksi.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Bos\TransaksiController::validasi_transaksi
* @see app/Http/Controllers/Bos/TransaksiController.php:150
* @route '/transaksi/validasi/{nomor}'
*/
validasi_transaksiForm.post = (args: { nomor: string | number } | [nomor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: validasi_transaksi.url(args, options),
    method: 'post',
})

validasi_transaksi.form = validasi_transaksiForm

const TransaksiController = { index, transaksi_persekolah, store_transaksi, destroy_transaksi, validasi_transaksi }

export default TransaksiController