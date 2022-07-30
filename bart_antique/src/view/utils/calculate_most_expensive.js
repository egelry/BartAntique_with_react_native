

export default function calculateMostExpensive(products) {

    let mostExpensive = products[0]
    for (let i = 1; i < products.length; i++) {
        let nextValue = parseInt(products[i]['value'])
        let mostExpensiveValue = parseInt(mostExpensive['value'])
        if (nextValue > mostExpensiveValue) {
            mostExpensive = products[i]
        }
    }

    return mostExpensive
}