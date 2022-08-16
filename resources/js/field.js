Nova.booting((Vue, router, store) => {
    Nova.inertia('index-text-auto-complete', require('./components/IndexField').default)
    Nova.inertia('detail-text-auto-complete', require('./components/DetailField').default)
    Nova.inertia('form-text-auto-complete', require('./components/FormField').default)
})
