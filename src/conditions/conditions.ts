export function checkName(title: string) {
    return title.length > 50 ? title.substr(0, 50) + "..." : title;
    // return title.length > 50 ? title.slice(0, 49) + "..." : title;
}

export function getCurrencySymbol (currency_code: string) {
    if ( currency_code === "USD" ) {
        return "$";
    }
    if ( currency_code === "EUR" ) {
        return "€";
    }
    return currency_code + " ";
}

export function getLeft (quantity: number) {
    if ( quantity <= 10 ) {
        return "item-quantity level-low";
    }
    if ( quantity <= 20 ) {
        return "item-quantity level-medium";
    }
    if ( quantity > 20 ) {
        return "item-quantity level-high";
    }
}
