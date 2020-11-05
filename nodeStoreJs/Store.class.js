const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

class Store {
    constructor(name, options) {
        this.name = name
        this.content = {}
    }

    getById(id) {
        return this.content[id]
    }
    add(resource) {
        const id = uuidv4()
        resource.id = id
    }
    delete(id) {
        if (this.getById(id))
        {
            delete this.content[id]
            return 'succes'
        }
        else
        {
            return 'error'
        }
    }
    replace(id, resource) {
        if (this.getById(id))
        {
            this.content[id] = resource
        }
        else {
            return 'error'
        }
    }
    patch(id, resource) {
        if (this.getById(id))
        {
            this.content[id].add(resource)
            return this.content[id]
        }
        else {
            return 'error'
        }
    }
    autoSave() {

    }
    autoLoad() {

    }
    save() {

    }
}

exports.Store = Store
