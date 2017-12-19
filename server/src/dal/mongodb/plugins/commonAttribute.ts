export function commonAttrPlugin (schema) {
    schema.add({ createdAt: Number });
    schema.add({ updatedAt: Number });

    schema.pre('save', function (next) {
        let now = Date.now();
        if(this.isNew) {
            this.createdAt = now;
        }
        this.updatedAt = now;
        next()
    });
}