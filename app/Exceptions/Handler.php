<?php

namespace App\Exceptions;

use App\Traits\ApiResponser;
use HttpException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Throwable;
use function Psy\debug;

class Handler extends ExceptionHandler
{
    use ApiResponser;

    /**
     * A list of the exception types that are not reported.
     *
     * @var string[]
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var string[]
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register()
    {
        $this->renderable(function (ValidationException $e, $request) {
             $errors = $e->validator->errors()->getMessages();
             return $this->errorResponse($errors, 422);
        });

        $this->renderable(function (ModelNotFoundException $e, $request) {
            $modelName = strtolower(class_basename($e->getModel()));
            return $this->errorResponse('Does not exist any {modelName} with the specified id.', 404);
        });

        $this->renderable(function (AuthenticationException $e, $request) {
            return $this->errorResponse('Unauthenticated.', 401);
        });

        $this->renderable(function (AuthorizationException $e, $request) {
            return $this->errorResponse($e->getMessage(), 403);
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {
            return $this->errorResponse('The requested URL cannot be found.', 404);
        });

        $this->renderable(function (MethodNotAllowedException $e, $request) {
            return $this->errorResponse('The speciefied method for the request is not allowed.', 405);
        });

        $this->renderable(function (HttpException $e, $request) {
            return $this->errorResponse($e->getMessage(), $e->getCode());
        });

        $this->renderable(function (QueryException $e, $request) {
            $errorCode = $e->errorInfo[1];

            if($errorCode == 19){
                return $this->errorResponse('Cannot remove this resource permanently. It is related with another resource.', 19);
            }
        });

        $this->reportable(function (Throwable $e) {
            //
        });
        if(!config('app.debug')){
            return $this->errorResponse('Unexpected exception. Please try again later.', 505);
        }
    }
}
