<?php

use App\Http\Controllers\Web\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('index');
