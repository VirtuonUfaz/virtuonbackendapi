export class NotFoundError extends Error {
    constructor(m?: string) {
        super(m ?? 'Resourse not found!');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}