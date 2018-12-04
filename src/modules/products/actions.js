/* export async function fetchProducts  ({state, commit, dispatch, getters, rootState}){

}

export async function fetchProducts  (context){
context.rootState // es el state genetal em eñ root
} */

export async function fetchProducts({
    commit
}) {
    const data = await fetch('/fixtures/products.json')
    const products = await data.json()
    commit('products/setProducts', products, {
        root: true
    })
}