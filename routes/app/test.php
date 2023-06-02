<?php

use App\Http\Controllers\Test\TestController;

Route::prefix('test')->group(function () {
    Route::get('data-table', [TestController::class, 'dataTable'])->name('data.table');
});
