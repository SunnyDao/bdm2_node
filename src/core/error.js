/**
 * 继续Node Error ,重写name 属性
 */
class ExtendableError extends Error {
    constructor(message = '') {
        super(message);

        // extending Error is weird and does not propagate `message`
        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        });

        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: false,
            value: this.constructor.name,
            writable: true,
        });

        if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
            return;
        }

        Object.defineProperty(this, 'stack', {
            configurable: true,
            enumerable: false,
            value: (new Error(message)).stack,
            writable: true,
        });
    }
}

/**
 * 定义api error 类
 */
class ApiError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

/**
 * 定义 RenderError 类
 */
class RenderError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

/**
 * ModalError error 
 */
class ModalError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

export { ApiError, RenderError, ModalError }