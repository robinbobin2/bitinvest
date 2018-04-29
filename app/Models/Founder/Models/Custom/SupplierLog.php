<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:58
 */

namespace App\Models\Founder\Models\Custom;


use Illuminate\Database\Eloquent\Model;

class SupplierLog extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'supplierLogs';

    const CREATED_AT = 'time';
    const UPDATED_AT = 'time';

    public static function log($method, $message, $exchangeId)
    {
        $log = new self();
        $log->method = $method;
        $log->message = $message;
        $log->exchangeId = $exchangeId;
        $log->save();
    }
}