import { observable, action, makeObservable } from "mobx"

class MainStore {


    @observable products = []
    @observable tempProducts = []

    constructor() {
        makeObservable(this)
    }

    @action getProducts(prod) {
        this.products = prod
    }

    @action getTempProducts(prod) {
        this.tempProducts = prod
    }

    @action updateTempProducts() {
        this.tempProducts = this.products
    }

    @action filterProducts(category) {
        const p = this.tempProducts
        const filtered = p.filter(item => item.category === category)
        this.tempProducts = filtered

    }

    @action searchProduct(val) {
        const p = this.tempProducts
        const filtered = p.filter(item => item.title.includes(val))
        this.tempProducts = filtered
    }




}

const store = new MainStore()

export default store